import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';

const _ = require('lodash');

class WeatherContent extends Component {
    render() {
        const {place, items} =this.props
        const dates = Object.keys(_.groupBy(items, item => item.dt_txt.substr(0,item.dt_txt.indexOf(' '))));
        console.log(Object.keys(_.groupBy(items, item => item.dt_txt.substr(0,item.dt_txt.indexOf(' ')))));
        return (
            <div style={{marginTop: '15px'}}>
                <Jumbotron>{
                    place && <div>
                    <h2>{place.name},{place.country}</h2>
                    <h5>Population: {place.population}</h5> 
                    {dates.map(item => (<div key={item}>
                        <a href={`#${item}`} >{item}</a> <br/>
                        </div>)
                    )}
                    </div>
                }
                {!place && <h3>Sorry place not found!</h3>}
                </Jumbotron>
            </div>
        );
    }
}

export default WeatherContent;