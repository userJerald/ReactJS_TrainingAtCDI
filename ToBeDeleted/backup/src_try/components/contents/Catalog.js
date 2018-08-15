import React, { Component } from 'react';
import * as API from '../../services/API';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items: []
        };
    }
    
    render() {
        API.fetchFood('cake')
        .then(items => {
            console.log(items)
            this.setState({
                items: items
            })
        })
        return (
            <div>
                Catalog page
            </div>
        );
    }
}

export default Catalog;