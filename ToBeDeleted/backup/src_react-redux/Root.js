import React, { Component } from 'react';
import Login from './Login';
import Main from './Main';
import { Route } from 'react-router-dom';

class Root extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Main}/>
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default Root;