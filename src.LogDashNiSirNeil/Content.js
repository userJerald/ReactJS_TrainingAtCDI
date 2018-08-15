import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap'

const Home = () => (
    <Jumbotron>
        <h2>Home</h2>
        <p>I'm the homepage</p>
    </Jumbotron>
)

const AboutUs = () => (
    <Jumbotron>
        <h2>About Us</h2>
        <p>I'm the about us page</p>
    </Jumbotron>
)

const ContactUs = () => (
    <Jumbotron>
        <h2>Contact Us</h2>
        <p>I'm the contact page</p>
        <Link to="/contactus/help"> Help </Link>
    </Jumbotron>
)

// const Detail = ({ match }) => <h2>{match.params.word}</h2>

class Detail extends Component {
    render() {
        const {  match : { params : { word } } } = this.props
        return (
            <h1>{word}</h1>
        );
    }
}


const NoMatch = () => (
    <Redirect to="/home"/>
)

class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contactus" component={ContactUs}/>
                    <Route component={NoMatch}/>
                </Switch>
                    <Route path="/contactus/:word" component={Detail}/>
            </div>
        );
    }
}

export default Content;