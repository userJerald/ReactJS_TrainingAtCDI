import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Row, Input, Button} from 'reactstrap';
import * as API from './API.js';

// import _uniqBy from 'lodash.uniqby';
// import _groupby from 'lodash.groupby';
import Card from './Card';

class Group extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filter: '',
            isLoading: false,
            items: []
        }

        this.fetch = this.fetch.bind(this);
    }

    componentDidMount () {
        this.fetch()
    }

    fetch () {
        this.setState({isLoading: true})
        const { filter } = this.state
        API.fetchFood(filter)
        .then(items => {

            console.log('fetch =', items.length)
            this.setState({isLoading: false})
            this.setState({
                items: items
            })
        })
        .catch(err => {
            this.setState({isLoading: false})
        })
    }

    // manipulate (item) {
    //     const nutrients = Object.keys(item.totalNutrients).map(key => item.totalNutrients[key])
    //     // const uniques = _groupby(nutrients, 'unit')
    //     // debugger

    // }

    render() {
        console.log('group.render =', this.state.items.length);

        const { isLoading, items } = this.state;

        let results = items;

        if (items.length > 0) {
            results = items.map((item, idx) => {
                return (
                    <Col sm={3} key = {idx}>
                        <Card className="food-item" content={item} showDelete = {false}>{item.label}</Card>
                    </Col>
                );
            });
        }

        return (
            <div>
                <Col>
                    <Form onSubmit={(e) => {
                        this.fetch();
                        e.preventDefault();
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
                    <Row>
                        {results}
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Group;