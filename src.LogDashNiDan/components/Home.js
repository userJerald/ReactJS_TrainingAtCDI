import React from 'react';
import {Redirect,withRouter,  BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './subcomponents/Dashboard';

class Home extends React.Component{
    render(){
        console.log(this.props.match);
        if(!this.props.user.isLogged){
            return <Redirect to='/'/>;
        }
        return(
            <div>
                <h3>Welcome {this.props.user.username}</h3>
                <button onClick={this.props.signOut.bind(this)}>Sign-out</button>
                <hr/>
                <Dashboard />
            </div>
        );
    }
}

export default Home;