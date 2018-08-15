import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dateSelected: new Date(),
            dateFormatted: "",
            dateAdd: ""
        }

        this.onDateChange = this.onDateChange.bind(this)
    }
    
    onDateChange (e) {
        const date = new Date(e.target.value).toISOString()
        // console.log(date)
        console.log(moment(date).format('dddd'))
        this.setState({
            dateFormatted: moment(date).format('MMM/Do/YY'),
            dateAdd: moment(date).add(1 , 'M').format('MMM/Do/YY')
        })
    }
    render() {
        const { dateFormatted, dateAdd } = this.state
        return (
            <div>
                <input type="date" onChange={this.onDateChange}/>
                <p>{dateFormatted}</p>
                <p>{dateAdd}</p>
            </div>
        );
    }
}

export default Time;