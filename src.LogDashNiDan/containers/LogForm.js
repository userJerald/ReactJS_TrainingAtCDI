import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";

import Login from '../components/Login';
import Home from '../components/Home';
import Auth from '../components/subcomponents/Auth';

class LogForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'isLogged': false,
            'username': ''
        };
        this.onSubmit= this.onSubmit.bind(this);
        this.signOut= this.signOut.bind(this);
    }

    onSubmit(username,e){
        e.preventDefault();
        this.setState({
            'isLogged': true,
            'username': username
        });
    }

    signOut(e){
        this.setState({
            'isLogged': false
        });
    }

    render(){
        return(
            <Router>
                <div>
                    <Auth isLogged={this.state.isLogged}/>
                    <Route exact path="/" render={() => <Login onSubmit={this.onSubmit}
                        isLogged={this.state.isLogged}/>}/>
                    <Route path ="/home" render={() => <Home user={this.state} 
                        signOut={this.signOut}/>}/>
                </div>
            </Router>
        );
    }
}

export default LogForm;