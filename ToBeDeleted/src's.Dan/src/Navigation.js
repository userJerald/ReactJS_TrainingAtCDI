import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as NavL, Button } from 'reactstrap';
import * as Session from './Session';

class Navigation extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "#3EAB89"}}>
                <Nav>
                    <NavItem>
                        <NavL tag={NavLink} to ="/home" activeStyle={{ color: 'orange' }}>
                            Home
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to ="/aboutus" activeStyle={{ color: 'orange' }}>
                            About us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to ="/contactus" activeStyle={{ color: 'orange' }}>
                            Contact us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to ="/table" activeStyle={{ color: 'orange' }}>
                            Table
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <Button color="secondary" onClick={()=> {
                            Session.setUser(null)
                            this.props.history.push('/login')
                        }}>Logout</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(Navigation);