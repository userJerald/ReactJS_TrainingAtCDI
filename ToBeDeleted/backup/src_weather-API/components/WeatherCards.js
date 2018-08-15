import React, { Component } from 'react';
import moment from 'moment';
import * as API from '../services/API';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class WeatherCards extends Component {
    render() {
        const { content } = this.props
        console.log(moment(content.dt_txt).format('MMMM DD YYYY, h:mm:ss a'),content.rain['3h'])
        return (
            <Card>
                <CardBody>
                    <CardTitle>{moment(content.dt_txt).format('MMMM DD YYYY, h:mm:ss a')}</CardTitle>
                    <CardText>
                        Temp: {content.main.temp}
                    </CardText>
                    <CardText>
                        Temp(min): {content.main.temp_min}
                    </CardText>
                    <CardText>
                        Temp(max): {content.main.temp_max}
                    </CardText>
                    <CardText>
                        Rain: {Number(Math.round(((content.rain['3h'])*100))/100)|| 'NO DATA'}%
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default WeatherCards;