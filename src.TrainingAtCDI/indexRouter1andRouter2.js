import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Router1 and Router2

// Router1 { ...

// *** NOTES ***

/*
Basic use of Link and Route of BrowserRouter,
where whatever string assigned in the attribute 'to' of Link
will search through every Route corresponds with that value in its 'path' attribute.
Meaning to say, match result may be more than one
*/
// Using 'to' and 'path' attributes of Link and Route respectively
// Using 'exact' attribute (accepts boolean value and is set to true by default if not assigned with value) of Route to make Link match with only the exact value of their 'path' and 'to' attribute
// Using 'component' attribute of Route to show the result
// By using symbol (/), the default page is specified

/*
match is used to catch the value (most common is to catch the current 'url',
and 'params' declared on purpose) passed from the thing that instantiate it
*/
// Using match to catch match.url
// Using  match to catch match.params.somevar
/*
Basic Use of 'render' attribute instead of 'component' attribute
(both attributes of Route that are most commonly used)
to show result in response to Link. Note that only one must be used to show result
*/

// *** CODE ***

// const Router1 = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to = '/'>Home</Link></li>
//         <li><Link to = '/about'>About</Link></li>
//         <li><Link to = '/more'>More</Link></li>
//       </ul>
//       <hr/>
//       <Route exact = {true} path = '/' component = {Home} />
//       <Route path = '/about' component = {About} />
//       <Route path = '/more' component = {More} />
//     </div>
//   </Router>
// );

// const Home = () => (<div><h3>Home</h3></div>);

// const About = () => (<div><h3>About</h3></div>);

// const More = ({match}) => (
//   <div>
//     <h3>More</h3>
//     <ul>
//       <li><Link to = {`${match.url}/more1`}>More1</Link></li>
//       <li><Link to = {`${match.url}/more2`}>More2</Link></li>
//       <li><Link to = {`${match.url}/more3`}>More3</Link></li>
//     </ul>

//     {/*
//     moreVar is declared here to receive either of the three more1, more2, or more3.
//     Note that it only receives the thing that is same with its level of hierarchy (in terms of directory)
//     */}
//     <Route path = {`${match.url}/:moreVar`} component = {More123} />

//     <Route exact = {true} path = {match.url} render = {() => (<h4>Please select from More Topics</h4>)} />
//   </div>
// );

// const More123 = ({match}) => (
//   <div>
//     <h4>{match.params.moreVar}</h4>
//   </div>
// );

// ... } Router1

// Router2 { ...

// *** NOTES ***

// using expression to accept conditional values with the help of match still.
// shows also the multiple match results, just to show the super and sub directory in hierarchy

/*
Mutual Features between Router1 and Router2:
. match to catch params
. 'render' attribute of Route but is used to show default result
*/

// *** CODE ***

const Router2 = () => (
  <Router>
    <div>
      <ul>
        <li><Link to = '/home'>Home</Link></li>
        <li><Link to = '/about'>About</Link></li>
        <li><Link to = '/more'>More</Link></li>
      </ul>
      <hr/>

      {/*
      params.var does not only accept the following links above,
      it also accepts user input 'url'. So once something is entered,
      even it is not any of links above will be diplayed by the component Common.
      Note that, this is the only also used to display the super directory 'conditional' with
      subs either val1, val2, or val3.
      */}

      <Route path = '/:var' component = {Common} />
      <Route exact = {true} path = '/' render = {() => (<h3>Please select from items above</h3>)} />

      {/*
      this where super 'conditional' is handled with subs either val1, val2, or val3 to accept by 'condVal'
      as their declared var to use with match.params
      */}

      <Route path = '/conditional/:condVal(val1|val2|val3)' component = {UnCommon} />
    </div>
  </Router>
);

const Common = ({match}) => (
  <div>
    <h3>{match.params.var}</h3>
  </div>
);

const UnCommon = ({match}) => (
  <div>
    <h3>{match.params.condVal}</h3>
  </div>
);

// ... } Router2

ReactDOM.render(
    <Router2 />,
    document.getElementById('root')
);