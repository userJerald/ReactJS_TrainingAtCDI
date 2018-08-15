import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button } from 'reactstrap';
import * as Session from './Session';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Nav className="nav-bar">
                    <NavItem>
                        <NavLink to="/" className="link" activeClassName = 'active' >
                            Other
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/home" >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/aboutus">
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contactus">
                            Contact Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/time">
                            Time
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/catalog">
                            Catalog
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cart">
                            Cart
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/group">
                            Group
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Button color="danger" onClick={()=> {
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