import React from 'react';
import {Redirect} from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'username': ''
        };
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        if(this.props.isLogged){
            return <Redirect to='/home'/>;
        }
        return(
            <div>
                <form onSubmit={this.props.onSubmit.bind(this,this.state.username)}>
                    Username: <input type='text' name="username" value={this.state.username}
                        onChange={this.handleChange}/>
                    <input type='submit' value="Sign-in"/>
                </form>
            </div>
        );
    }
}

export default Login;