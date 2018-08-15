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
    
    iterateItems(items) {
        items.forEach(item => {
           console.log('foreach =', item.label);
        });
    }

    componentDidMount () {
        const { detail : { filter }} = this.props
        API.fetchFood(filter)
        .then(items => {
            this.setState({
                items: items
            })
            
            items.forEach(({uri, label}) => {
                console.log(`componentDidMount = ${uri}, ${label}`)
            })

            return items;
        })
        .then(this.iterateItems)
    }
    render() {
        const { items } = this.state
        return (
            <Row>
                {items.map((item, idx) => (
                    <Col sm={3} key = {item.label}>
                        {console.log('catalogcontentcard =', item.label)}
                        <Card className="food-item" content={item}>{item.label}</Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CatalogContentCards;