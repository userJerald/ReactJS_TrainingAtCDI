import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Default from './default';
import Public from './public';
import Admin from './admin';
import Restaurant from './restaurant';
import Supplier from './supplier';

class SRSys extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <Route path = '/' component = {Default} /> */}
                    <Route component = {Public} />
                    <Route exact path = '/admin' component = {Admin} />
                    <Route exact path = '/restaurant' component = {Restaurant} />
                    <Route exact path = '/supplier' component = {Supplier} />
                </div>
            </Router>
        );
    }
}

export default SRSys;