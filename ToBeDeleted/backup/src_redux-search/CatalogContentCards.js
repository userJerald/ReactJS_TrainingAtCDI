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
        
    }
    render() {
        const { detail } = this.props
        API.fetchFood(detail)
        .then(items => {
            console.log(items,detail)
            this.setState({
                items: items
            })
        })
        const { items } = this.state
        console.log(items);
        return (
            <Row>
                {items.map((item, idx) => (
                    // <Col sm="3"  key={idx}><p>{item.label}</p></Col>
                    <Col sm={5} key={idx}>
                        <Card className="food-item" content={item}>{item.label}</Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CatalogContentCards;