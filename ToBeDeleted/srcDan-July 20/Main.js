import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Content from './Content';

import * as Session from './Session';

class Main extends Component {
    render() {
        const { history } = this.props;
        console.log(this.props.location);
        if (Session.getUser() === null && this.props.location.pathName !=='/login') {
            return <Redirect to="/login"/>
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