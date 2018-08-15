import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

const Content = ({match}) => (
    <Switch>
        <Route path = {`public/:id`} component = {Home} />
        {/* <Route exact path = 'public/signup' component = {SignUp} />
        <Route exact path = 'public/login' component = {Login} /> */}
    </Switch>
);

const Home = ({match}) => (
    <h1>{match.params.id}</h1>
);

export default withRouter(Content);