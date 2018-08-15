import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import Card from './Card';
import {Input} from 'reactstrap';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state={
            'datePicked': '',
            'items': this.props.cart.items,
            'allItems': this.props.cart.items
        };
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){
        const filterItems = this.state.allItems.filter((item) => item.date === e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            'items': filterItems
        });
        console.log(filterItems, this.state.datePicked);
    }

    render() {
        const { datePicked, items} = this.state;
        return (
            <div>
                Filter on:<Input type='date' name="datePicked" value={datePicked} onChange={this.handleChange}/>
                <Row>
                    {items.map((item, idx) => (
                        // <Col sm="3"  key={idx}><p>{item.label}</p></Col>
                        <Col sm={3} key={idx}>
                            <Card className="food-item" showDelete={true} content={item.item} date={item.date}>{item.item.label}</Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

function mapStateToProps ({cart}) {
    return {cart}
}

export default connect(mapStateToProps,null)(Calendar);