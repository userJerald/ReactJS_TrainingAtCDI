import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button, NavLink as NavL} from 'reactstrap';
import * as Session from './Session';

class Navigation extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "#3EAB89"}}>
                <Nav>
                    <NavItem>
                        <NavL tag={NavLink} to="/home" activeStyle={{ color: 'yellow' }}>
                            Home
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/aboutus" activeStyle={{ color: 'yellow' }}>
                            About Us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/contactus" activeStyle={{ color: 'yellow' }}>
                            Contact Us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/time" activeStyle={{ color: 'yellow' }}>
                            Time
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/catalog" activeStyle={{ color: 'yellow' }}>
                            Catalog
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/cart" activeStyle={{ color: 'yellow' }}>
                            Cart
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/calendar" activeStyle={{ color: 'yellow' }}>
                            Calendar
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/group" activeStyle={{ color: 'yellow' }}>
                            Group
                        </NavL>
                    </NavItem>
                </Nav>
                <Nav navbar><Button color="danger" onClick={()=> {
                            Session.setUser(null)
                            this.props.history.push('/login')
                        }}>Logout</Button></Nav>
            </Navbar>
        );
    }
}

export default withRouter(Navigation);