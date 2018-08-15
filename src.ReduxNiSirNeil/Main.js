import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Content from './Content';

import * as Session from './Session';

class Main extends Component {
    state = {
        onHover : false
    }
    render() {
        if (Session.getUser() === null && this.props.location.pathname !== "/login") {
            return <Redirect to="/login"/>;
        }
        return Session.getUser() && (
            <div>
                <Navigation/>
                <Content/>
            </div>
        );
    }
}

export default withRouter(Main);