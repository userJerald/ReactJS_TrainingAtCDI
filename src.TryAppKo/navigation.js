import React from 'react';
import {NavLink as NavL} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';

const publicNav = [
    {
        'to': 'home',
        'text': 'Home'
    },
    {
        'to': 'signup',
        'text': 'Sign Up'
    },
    {
        'to': 'login',
        'text': 'Login'
    }
];
const adminNav = ['home', 'admin_managerestaurantusers', 'admin_managesupplierusers', 'admin_manageaccount'];
const restaurantNav = ['home', 'restaurant_manageproducts', 'restaurant_managestocks', 'restaurant_requestorders', 'restaurant_reports'];
const supplierNav = ['home', 'supplier_managestocks', 'supplier_manageorders', 'supplier_reports', 'supplier_promoteservices'];

// withrouter this

const Navigation = () => {
    // let navitems;

    // navitems = publicNav.map((item, index) => (
    //     <NavItem key = {index}>
    //         <NavLink tag = {NavL} to = {`public/${item.to}`}>
    //             {item.text}
    //         </NavLink>
    //     </NavItem>
    // ));
    
    // if (location.pathname === '/admin') {
    //     navitems = publicNav.map((item, index) => (
    //         <NavItem key = {index}>
    //             <NavLink>

    //             </NavLink>
    //         </NavItem>
    //     ))
    // }
    // else if (location.pathname === '/restaurant') {

    // }
    // else if (location.pathname === '/supplier') {

    // }
    // else {

    // }
    
    return (
        <Navbar>
            <Nav>
                <NavItem>
                    <NavLink tag = {NavL} to = 'public/home'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag = {NavL} to = 'public/signup'>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag = {NavL} to = 'public/login'>Login</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;