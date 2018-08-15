import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import * as API from './API.js';
import Card from './Card';

class CatalogContentCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    
    componentDidMount () {
        const { detail : { filter }} = this.props

        API.fetchFood(filter)
        .then(items => {
            console.log(items)
            this.setState({
                items: items
            })
        })
    }
    render() {
        const { items } = this.state
        console.log(items);
        return (
            <Row>
                {items.map((item, idx) => (
                    // <Col sm="3"  key={idx}><p>{item.label}</p></Col>
                    <Col sm={3} key={idx}>
                        <Card className="food-item" content={item}>{item.label}</Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CatalogContentCards;