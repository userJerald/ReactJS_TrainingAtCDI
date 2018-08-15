import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button, NavLink as NavL} from 'reactstrap';
import * as Session from '../services/Session';

class Navigation extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "#3EAB89"}}>
                <Nav>
                    <NavItem>
                        <NavL tag={NavLink} to="/catalog" activeStyle={{ color: 'yellow' }}>
                            Catalog
                        </NavL>
                    </NavItem>
                    <NavItem>
                        <NavL tag={NavLink} to="/calendar" activeStyle={{ color: 'yellow' }}>
                            Calendar
                        </NavL>
                    </NavItem>
                </Nav>
                <Nav navbar><Button color="danger" onClick={()=> {
                            Session.removeUser()
                            this.props.history.push('/login')
                        }}>Logout</Button></Nav>
            </Navbar>
        );
    }
}

export default withRouter(Navigation);