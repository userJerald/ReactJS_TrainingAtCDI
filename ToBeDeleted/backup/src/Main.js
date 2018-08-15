import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Content from './Content';

import * as Session from './Session';

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
        if (Session.getUser() === null && this.props.location.pathName === "/login") {
            return <Redirect to="/login"/>
        }
        return Session.getUser() && (
            <div>
                <Navigation/>
                <Content/>
                
                {/* <a style={ onHover ? style1 : style2 } href="#" onMouseEnter={()=>{this.setState({onHover: true})}} onMouseLeave={()=>{this.setState({onHover: false})}}>hello</a> */}

            </div>
        );
    }
}

export default withRouter(Main);