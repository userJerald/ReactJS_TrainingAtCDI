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
                        <NavL>
                            <NavLink to="/home" activeStyle={{ color: 'orange' }}>
                                Home
                            </NavLink>
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL>
                            <NavLink to="/aboutus" activeStyle={{ color: 'orange' }}>
                                About Us
                            </NavLink>
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL>
                            <NavLink to="/contactus" activeStyle={{ color: 'orange' }}>
                                Contact Us
                            </NavLink>
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL>
                            <NavLink to="/table" activeStyle={{ color: 'orange' }}>
                                Table
                            </NavLink>
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