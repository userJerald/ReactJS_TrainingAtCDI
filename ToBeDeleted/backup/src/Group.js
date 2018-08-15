import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button} from 'reactstrap';
import * as API from './API.js';

import _groupby from 'lodash.groupby';

class Group extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filter: '',
            isLoading: false,
            items: []
        }

        this.fetch = this.fetch.bind(this)
    }

    componentDidMount () {
        this.fetch()
    }

    fetch () {
        this.setState({isLoading: true})
        const { filter } = this.state
        API.fetchFood(filter)
        .then(items => {

            console.log(items)
            const array = items.map(item => this.manipulate(item))
            this.setState({isLoading: false})
            this.setState({
                items: items
            })
        })
        .catch(err => {
            this.setState({isLoading: false})
        })
    }

    manipulate (item) {
        const nutrients = Object.keys(item.totalNutrients).map(key => item.totalNutrients[key])
        const uniques = _groupby(nutrients, 'unit')
        debugger

    }

    render() {
        const { items, isLoading } = this.state
        return (
            <Col>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    this.fetch()
                }}>
                    <FormGroup row>
                        <Label for="filter" sm={2}>Filter</Label>
                        <Col sm={6}>
                            <Input type="text" name="filter" id="filter" placeholder='Filter' onChange={(e) => this.setState({filter: e.target.value})} required/>
                        </Col>
                        <Col sm={4}>
                            <Button type="submit" color="primary" disabled={isLoading}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                {items.map((item, idx) => <p key={idx}>{item.label}</p>)}
            </Col>
        );
    }
}

export default Group;