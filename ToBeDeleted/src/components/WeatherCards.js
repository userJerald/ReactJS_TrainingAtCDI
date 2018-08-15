import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardBody, CardTitle, CardText,CardImg} from 'reactstrap';

class WeatherCards extends Component {
    render() {
        const { content } = this.props;
        const weather = content.weather.reduce((acc, cur, i) => {
            acc[i] = cur;
            return acc;
          }, {});
        console.log(weather['0'].main);
        return (
            <Card>
                <CardBody>
                    <CardTitle>{moment(content.dt_txt).format('MMMM DD YYYY, h:mm:ss a')}</CardTitle>
                    <CardText>
                        Temp: {content.main.temp}
                    </CardText>
                    <CardText>
                        Sea level: {content.main.sea_level}
                    </CardText>
                    <CardText>
                        Wind: {content.wind.speed} ms
                    </CardText>
                    <CardImg top src={`http://openweathermap.org/img/w/${weather['0'].icon}.png`} alt={weather.description} />
                    <CardText>
                        Weather: {weather['0'].description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default WeatherCards;