import React, { Component } from 'react';
import Login from './containers/Login';
import Main from './containers/Main';
import { Route } from 'react-router-dom';
import * as Session from './services/Session';

class Root extends Component {
    render() {
        return (
            <div>
                {Session.getUser()&&<Route path="/" component={Main}/>}
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default Root;