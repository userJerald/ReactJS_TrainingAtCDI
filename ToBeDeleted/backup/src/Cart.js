import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import Card from './Card';

class Cart extends Component {
    render() {
        const { cart : { items }} = this.props
        return (
            <Row>
                {items.map((item, idx) => (
                    // <Col sm="3"  key={idx}><p>{item.label}</p></Col>
                    <Col sm={3} key={idx}>
                        <Card className="food-item" showDelete={true} content={item}>{item.label}</Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

function mapStateToProps ({cart}) {
    return {cart}
}

export default connect(mapStateToProps,null)(Cart);