import React from 'react';
import {Button, Label} from 'reactstrap';
import {Redirect} from 'react-router-dom';

import * as Session from './Session';
import Navigation from './navigation';
import Content from './content';

class Public extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'userrole': ''
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.location.pathname.indexOf('/public') > -1) {
            this.props.history.push('/public');
        }
    }

    login() {
        if (this.state.userrole === 'admin' || this.state.userrole === 'restaurant' || this.state.userrole === 'supplier') {
            Session.setUser(this.state);
            this.props.history.push(`/${this.state.userrole}`);   
        }
        else {
            this.setState({
                'userrole': ''
            })
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        console.log(`public = ${Session.isPublicVisited()}`);
        if (Session.getUser() && this.props.location.pathname !== `/${Session.getUser().userrole}`) {
            return <Redirect to = {`/${Session.getUser().userrole}`} />;
        }
        else if (!Session.getUser() && !Session.isPublicVisited()) {
            Session.makePublicVisited();
            return (
                <div>
                    {console.log('public.in =', Session.isPublicVisited())}
                    <Navigation />
                    <Content />
                </div>
            );
        }
        
        return null;
    }
}

export default Public;

/*
public
. home
. signup
. login

*/

/*
admin
. home
. manage restaurant users
. manage supplier users
. manage your account

*/

/*
restaurant
. home
. manage products plus see what is available in hand (tab group -> fries, cake, drink, etc)
. manage raw materials (restaurant's stock)
. request orders
. report (inventory)

*/

/*
supplier
. home
. manage raw materials (supplier's stock)
. manage orders
. report (inventory and sale)
. promote services

*/