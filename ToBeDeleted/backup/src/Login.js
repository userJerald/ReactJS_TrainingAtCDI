import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

import * as Session from './Session';

class Login extends Component {
    constructor(props) {
        super(props)

        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin () {
        const { history } = this.props
        const sampleUser = {
            name: "Hooman",
            token: 'qwpoeisd1-203sd-aspodi'
        }
        Session.setUser(sampleUser)
        history.push('/home')
    }
    render() {
        // const user = 
        if (Session.getUser() !== null) {
            return <Redirect to="/home"/>
        }
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
                        <Input type="text" placeholder="Email"/>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <Button color="primary" onClick={this.handleLogin}>Log In</Button>
                </div>  
            </div>
        );
    }
}

export default withRouter(Login);