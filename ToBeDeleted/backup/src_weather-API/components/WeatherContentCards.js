import React, { Component } from 'react';
import * as API from '../services/API';
import {Row, Col} from 'reactstrap';
import '../index.css';
import WeatherCards from './WeatherCards';

class WeatherContentCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount () {
        
    }

    render() {
        const {city, code}= this.props;
        
        const { items } = this.state;
        console.log('items',items);
        return (
            <Row>
                {items.map((item, idx) => (
                    <Col sm={3} key={idx}>
                        <WeatherCards className="food-item" content={item}/>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default WeatherContentCards;