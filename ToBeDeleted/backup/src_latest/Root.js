import React, { Component } from 'react';
import Login from './Login';
import Main from './Main';
import { Route } from 'react-router-dom';

class Root extends Component {
    render() {
        return (
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Main}/>
            </div>
        );
    }
}

export default Root;