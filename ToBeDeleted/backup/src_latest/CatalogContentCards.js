import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Card from './Card';

class CatalogContentCards extends Component {
    render() {
        const { items } = this.props
        return (
            <Row>
                {items.map((item, idx) => (
                    // <Col sm="3"  key={idx}><p>{item.label}</p></Col>
                    <Col sm={4} key={idx}>
                        <Card className="food-item" content={item}>{item.label}</Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CatalogContentCards;