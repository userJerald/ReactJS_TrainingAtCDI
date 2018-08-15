import React, { Component } from 'react';
import WeatherContentCards from '../components/WeatherContentCards';
import {Input, InputGroup, InputGroupAddon, Form, Button} from 'reactstrap';

class WeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            city: '',
            code: '',
            search: false,
            items: []
        };
        this.submit= this.submit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
        {e.target.value && this.setState({search:false})}
    }

    submit(e){
        e.preventDefault();
        this.setState({search: true});
        API.fetchWeather(city,code)
        .then(items => {
            console.log('hi',items)
            this.setState({
                items: items.list
            })
        })
    }

    render() {
        const { city, code, search } = this.state;
        return (
            <div>
                <Form>
                    <InputGroup>
                        <Input type='text' name='city' value={city} 
                            placeholder="Type a city" onChange={this.handleChange}/>
                        <Input type='text' name='code' value={code} 
                            placeholder="Type country code" onChange={this.handleChange}/> 
                        <InputGroupAddon addonType="append">
                            <Button color="info" onClick={this.submit}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>  
                </Form>
                {search && <WeatherContentCards city={city} code={code}/>}
            </div>
        );
    }
}

export default WeatherSearch;