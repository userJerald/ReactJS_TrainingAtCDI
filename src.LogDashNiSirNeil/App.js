import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/login" component={Login}/>
          <Route path="/" component={Main}/>
      </div>
    );
  }
}

export default App;
