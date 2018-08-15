import React, { Component } from 'react';
import { Redirect, withRouter,Switch,Route } from 'react-router-dom';
import * as Session from '../services/Session';
import Navigation from '../components/Navigation';
import Catalog from '../components/contents/Catalog';
import Calendar from '../components/contents/Calendar';

class Main extends Component {
    state = {
        onHover : false
    }
    render() {
        const { onHover } = this.state
        const { history } = this.props
        const style1 = {
            color: 'green'
        }

        const style2 = {
            color: 'blue'
        }
        if (Session.getUser() === null) {
            return <Redirect to="/login"/>
        }
        return Session.getUser() && (
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/calendar' component={Calendar}/>
                </Switch>
                {/* <a style={ onHover ? style1 : style2 } href="#" onMouseEnter={()=>{this.setState({onHover: true})}} onMouseLeave={()=>{this.setState({onHover: false})}}>hello</a> */}

            </div>
        );
    }
}

export default withRouter(Main);