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
                        <NavL tag={NavLink} to="/home" activeStyle={{ color: 'orange' }}>
                            Home
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/aboutus" activeStyle={{ color: 'orange' }}>
                            About Us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/contactus" activeStyle={{ color: 'orange' }}>
                            Contact Us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/time" activeStyle={{ color: 'orange' }}>
                            Time
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/catalog" activeStyle={{ color: 'orange' }}>
                            Catalog
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/cart" activeStyle={{ color: 'orange' }}>
                            Cart
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/calendar" activeStyle={{ color: 'orange' }}>
                            Calendar
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/group" activeStyle={{ color: 'orange' }}>
                            Group
                        </NavL>
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