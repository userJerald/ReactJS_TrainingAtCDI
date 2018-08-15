import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom";

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={`${this.props.url}/home`}>Home</Link></li>
                    <li><Link to={`home/about`}>About</Link></li>
                    <li><Link to={`home/faq`}>FAQ</Link></li>
                </ul>
                <Switch>
                    <Route path={`${this.props.path}/home`} component={DashHome}/>
                    {/* <Route path={`${this.props.match.path}/about`} component={DashPage.About}/>
                    <Route path={`${this.props.match.path}/faq`} component={DashPage.FAQ}/> */}
                </Switch>
            </div> 
        );
    }
}
           
const DashHome = () => (
    <h5>This is home page of dashboard.</h5>
);
           

export default Dashboard;