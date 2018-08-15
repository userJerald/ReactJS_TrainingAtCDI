import React, { Component } from 'react';
import { Row, Col, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import CatalogContentCards from './CatalogContentCards'; 

import * as API from './API';
import * as webSession from './webSession';

const search = 'search';
const Items = 'items'; 

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: webSession.getSearch(search),
            food: '',
            items: []
        };
        this.submit= this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        {this.state.search && this.submit()}
        this.textInput.focus();
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value.toLowerCase()});
    }

    submit(){
        this.setState({food:this.state.search});
        API.fetchFood(this.state.search)
        .then(items => {
            this.setState({
                items: items
            })
        })
        webSession.setSearch(search,this.state.search);
    }

    render() {
        console.log()
        const { search, food, items } = this.state;
        return (
            <Col  style={{padding: '30px'}}>
                <InputGroup style={{width:'250px'}}>
                <Input type='text' name='search' value={search} onChange={this.handleChange}
                    placeholder='Search food' ref={(input) => this.textInput = input}/>
                <InputGroupAddon type='append'><Button color="info" onClick={this.submit}>Search</Button>
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

export default Catalog;