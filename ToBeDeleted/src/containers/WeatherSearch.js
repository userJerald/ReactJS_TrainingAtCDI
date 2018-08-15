import React, { Component } from 'react';
import WeatherContentCards from '../components/WeatherContentCards';
import {Input, InputGroup, InputGroupAddon, Form, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import * as API from '../services/API';
import WeatherContent from '../components/WeatherContent';

const queryString = require('query-string');

class WeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            city: '',
            code: '',
            search: false,
            items: false
        };
        this.submit= this.submit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    
    componentDidMount(){
        const {location} = this.props;
        location.search&&
        this.setState({
            city: `${queryString.parse(location.search).city}`,
            code: `${queryString.parse(location.search).code}`,
        });
        API.fetchWeather(`${queryString.parse(location.search).city}`,`${queryString.parse(location.search).code}`)
        .then(items => {
            this.setState({
                items: items
            })
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
        e.target.value && this.setState({search:false});
    }

    submit(e){
        e.preventDefault();
        const {history} = this.props;
        const {city, code} = this.state;
        API.fetchWeather(city,code)
        .then(items => {
            console.log('hi',items)
            this.setState({
                items: items
            })
        })
        this.setState({
            search: true,
        });
        history.push(`/search?city=${city}&code=${code}`);
        
    }

    render() {
        const { city, code, items } = this.state;
        console.log(items,!items);
        console.log(this.props);
        return (
            <div style={{margin: '15px'}}>
                <Form>
                    <InputGroup style={{width:'400px'}}>
                        <Input type='te)xt' name='city' value={city} 
                            placeholder="Type a city" onChange={this.handleChange}
                            />
                        <Input type='text' name='code' value={code} 
                            placeholder="Type country code" onChange={this.handleChange}
                            /> 
                        <InputGroupAddon addonType="append">
                            <Button color="info" onClick={this.submit}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>  
                </Form>
                {items&& <div>
                <WeatherContent place={items.city} items={items.list}/>
                <WeatherContentCards items={items.list}/>
                </div>}
            </div>
        );
    }
}

export default withRouter(WeatherSearch);