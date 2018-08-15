import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, Input, InputGroup } from 'reactstrap';

import CatalogContent from './CatalogContent';
import CatalogContentCards from './CatalogContentCards';

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            food: ''
        };
        this.submit= this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value.toLowerCase()});
    }

    submit(){
        this.setState({food:this.state.search});
    }

    render() {
        const { activeTab, components, search, food } = this.state;
        return (
            <Col>
                <Input type='text' name='search' value={search} onChange={this.handleChange}/>
                <Button color="info" onClick={this.submit}>Search</Button>
                <Row>&nbsp;</Row>
                    <Row>
                        <Col sm="12">
                            {food && <CatalogContentCards detail={food}/>}
                        </Col>
                    </Row>
            </Col>
        );
    }
}

export default Catalog;