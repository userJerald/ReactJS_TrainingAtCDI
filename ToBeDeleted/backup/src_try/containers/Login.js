import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

import * as Session from '../services/Session';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            'name': '',
            'hasName': true
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin () {
        const { history } = this.props;
        const { name } = this.state;
        // const sampleUser = {
        //     name: "Hooman",
        //     token: 'qwpoeisd1-203sd-aspodi'
        // }
        Session.setUser(name);
        history.push('/home');
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value,'hasName': false});
        {!e.target.value && this.setState({'hasName': true})}
    }
    render() {
        if (Session.getUser() !== null) {
            return <Redirect to="/home"/>
        }
        const { name, hasName } = this.state;
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <div style={{
                    width: '300px',
                    height: '300px',
                    backgroundColor: "#CECECE",
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <p className="text-center">Welcome to my page</p>
                    <div>
                        <Input type="text" name="name" value={name} 
                            placeholder="Username" onChange={this.handleChange}/>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <Button color="primary" onClick={this.handleLogin} disabled={hasName}>Log In</Button>
                </div>  
            </div>
        );
    }
}

export default withRouter(Login);