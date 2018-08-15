import React, { Component } from 'react';
import { withRouter, Link as NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as NavL, Button } from 'reactstrap';
import * as Session from './Session';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavL tag = {NavLink} to = '/home'>
                            Home
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag = {NavLink} to = '/aboutus'>
                            About Us
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag = {NavLink} to = '/contactus'>
                            Contact Us
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

/*

<NavItem>
    <NavL>
        <NavLink to="/home">
            Home
        </NavLink>
    </NavL>
</NavItem>
<NavItem>
    <NavL>
        <NavLink to="/aboutus">
            About Us
        </NavLink>
    </NavL>
</NavItem>
<NavItem>
    <NavL>
        <NavLink to="/contactus">
            Contact Us
        </NavLink>
    </NavL>
</NavItem>
<NavItem>
    <Button color="danger" onClick={()=> {
        Session.setUser(null)
        this.props.history.push('/login')
    }}>Logout</Button>
</NavItem>

*/