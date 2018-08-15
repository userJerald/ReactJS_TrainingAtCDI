import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';

// Router7 only

// Router7 { ...

// makes use of cookie

const cookie = new Cookies();

const Session = {
  setUser : (user) => {
    user ? cookie.set('user', user, {path: '/'}) : cookie.remove('user', {path: '/'})
  },
  getUser : () => {
    return cookie.get('user') || null;
  }
};

const Router7 = () => (
  <Router>
    <div>
      <Route path = '/login' component = {Login} />
      <Route path = '/' component = {Main} />
    </div>
  </Router>
);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'username': '',
      'password': ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const sampleUser = {
      'username': this.state.username,
      'password': this.state.password,
      'token': 'anyvalueworks'
    };

    Session.setUser(sampleUser);
    this.props.history.push('/main');
  }

  render() {
    return (
      <form onSubmit = {this.submitForm}>
        <input type = 'text' name = 'username' value = {this.state.username} onChange = {this.handleChange.bind(this)} />
        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleChange.bind(this)} />
        <input type = 'submit' value = 'Login' />
      </form>
    );
  }
}

const Main = (props) => {
  if (Session.getUser() === null && props.location.pathname !== '/login') {
    return <Redirect to = '/login' />;
  }
  else if (Session.getUser() !== null) {
    const user = Session.getUser();
    Session.setUser(null);
    return (<h3>Hello, your username and password are {user.username} and {user.password}!</h3>);
  }
  else {
    return null;
  }
}

// ... } Router7

ReactDOM.render(
  <Router7 />,
  document.getElementById('root')
);