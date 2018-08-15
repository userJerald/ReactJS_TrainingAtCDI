import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as NavL, Button } from 'reactstrap';
import * as Session from './Session';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
    <SidebarItem><NavLink to='/home'>Menu</NavLink></SidebarItem>,
    <SidebarItem><NavLink to='/aboutus'>About Us</NavLink></SidebarItem>,
    <SidebarItem><NavLink to='/contactus'>Contact Us</NavLink></SidebarItem>,
    <SidebarItem><NavLink to='/table'>Table</NavLink></SidebarItem>,
    <SidebarItem><Button color="secondary" onClick={()=> {
        Session.setUser(null)
    }}>Logout</Button></SidebarItem>
  ];

class Navigation extends Component {
    render() {
        return (
            <Sidebar content={items} closeOnItemSelect={true}>
            </Sidebar>
        );
    }
}

export default withRouter(Navigation);