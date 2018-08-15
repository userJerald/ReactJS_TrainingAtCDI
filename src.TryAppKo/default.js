import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import * as Session from './Session';


class Default extends React.Component {
    render() {
        if (Session.getUser()) {
            return null;
        }
    }
}

export default Default;