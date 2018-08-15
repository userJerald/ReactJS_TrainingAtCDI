import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import '../index.css';
import WeatherCards from './WeatherCards';

const _ = require('lodash');

class WeatherContentCards extends Component {
    render() {
        const { items } = this.props;
        console.log('items',items);
        const datesGroup = (_.groupBy(items, item => item.dt_txt.substr(0,item.dt_txt.indexOf(' '))));
        console.log(Object.values(datesGroup));
        return (
            <div>
                {/* {datesGroup.map((date) => (
                    <div key={date}>
                        <h3 key={date}>{date}</h3>
                        <Row>
                            {items.filter((item) => (
                                item.dt_txt.substr(0,item.dt_txt.indexOf(' ')) !== date &&
                                <Col sm={3}>
                                    <WeatherCards className="food-item" content={item}/>
                            </Col>
                            ))}
                        </Row>
                    </div>
                    )
                )} */}
            </div>
        );
    }
}

export default WeatherContentCards;