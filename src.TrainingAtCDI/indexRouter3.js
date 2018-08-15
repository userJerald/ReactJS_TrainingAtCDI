import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Router3 only

// Router3 { ...

// *** NOTES ***

/*
Using Customized Route allows you to pass an object (attribute of Customized Route) like props and accept it by using rest operator,
to accept every attribute of the Customized Route by every argument assigned to it
(Note that, this also destructuring but is not used for more convenience to the programmer,
and is only for accepting attribute that may reorder),
or to accept every attribute with the used of destructuring (with more convenience, allows the use of reordering, renaming, rest and spread operator)
*/

// First use of CustomRoute, to pass attributes as an object and use rest operator to accept it.
// Secode use, to pass attributes not as an object, and accept it by every argument assigned to each.
// Third, to pass attributes not as an object, and accept it with more convenient way.

// *** CODE ***

const Router3 = () => (
  <Router>
    <div>
      <ul>
        <li><Link to = '/first'>First Way</Link></li>
        <li><Link to = '/second'>Second Way</Link></li>
        <li><Link to = '/third'>Third Way</Link></li>
        <hr/>
        <CustomRoute1 exact = {true} path = '/first' render = {() => (
          <h3>First Way using Match (diplayed twice on purpose, see it yourself in the code)</h3>)} />
        <CustomRoute2 exact = {true} path = '/second' render = {() => (
        <h3>Second Way using one by one (still destructuring)</h3>)} />
        <CustomRoute3 exact = {true} path = '/third' component = {CustomRoute3Component} />
      </ul>
    </div>
  </Router>
);

const CustomRoute1 = ({...obj}) => (
  <div>
    <Route
    exact = {obj.exact}
    path = {obj.path}
    render = {obj.render}
    />
    <Route
    {...obj}
    />
  </div>
);

const CustomRoute2 = ({exact, path, render}) => (
  <Route
  exact = {exact}
  path = {path}
  render = {render}
  />
);

const CustomRoute3 = ({component: Component, ...routeAttribs}) => (
  <Route
  {...routeAttribs}
  render = {() => <Component display = 'Third Way using More Convenient Destructuring' />}
  />
);

const CustomRoute3Component = (props) => (
  <h3>{props.display}</h3>
);

// ... } Router3

ReactDOM.render(
  <Router3 />,
  document.getElementById('root')
);