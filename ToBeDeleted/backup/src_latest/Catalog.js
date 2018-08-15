import React, { Component } from 'react';
import { Row, Col, Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import CatalogContentCards from './CatalogContentCards'; 

import * as API from './API';
const queryString = require('query-string');

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            food: '',
            items: []
        };
        this.submit= this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        {this.props.location.search && this.submit()}
        this.textInput.focus();
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value.toLowerCase()});
    }

    submit(){
        console.log('Submit');
        if(`${queryString.parse(this.props.location.search).food}`){
            this.setState({search: ''});
            console.log('if',`${queryString.parse(this.props.location.search).food}`)
        }
        const {history, match} = this.props;
        this.setState({food:this.state.search});
        API.fetchFood(this.state.search)
        .then(items => {
            this.setState({
                items: items
            })
        })
        history.push(`${match.url}/search?food=${this.state.search}`);
    }

    render() {
        console.log(queryString.parse(this.props.location.search).food);
        const { search, food, items } = this.state;
        return (
            <Col style={{padding: '30px'}}>
                <InputGroup style={{width:'250px'}}>
                    <Input type='text' name='search' value={search} onChange={this.handleChange}
                        placeholder='Search food' ref={(input) => this.textInput = input}/>
                    <InputGroupAddon addonType='append'><Button color="info" onClick={this.submit}>Search</Button>
                    </InputGroupAddon>
                </InputGroup>
                <Row>&nbsp;</Row>
                    <Row>
                        <Col sm="12">
                            {food && <CatalogContentCards detail={food} items={items}/>}
                        </Col>
                    </Row>
                {!items && <h3>No item found</h3>}
            </Col>
        );
    }
}

export default withRouter(Catalog);