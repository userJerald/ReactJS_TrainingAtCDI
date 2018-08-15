import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Route, Link, Switch, Redirect, withRouter} from 'react-router-dom';

// Router4, Router5, and Router6

/*
. Things Learned:
 * Route Intance Destructuring to pass props 
 * Component Instance Destructuring features object spread operator are helpful if you receive multiple props
and wish to pass them to another Instance but the only problem is you will also pass some items you don't
need to pass.
 * take advantage of using props object, to receive not only the regular props passed along the calling
of an Instance but also receiving something like what Route provides match, location, and history objects.
 * make use of default path to always help user go to the page as they run the application.

. Other Things:

/login - hindi dapat default path ang meron ito, kasi ito ay hindi naman talaga ang dapat 
magserve na home page. Ito ay dapat lamang lumabas kung walang nakalogged in na user else 
lalabas ang /home ng dashboard.
/ - ang dashboard, kasi ito dapat ang magsilbing default page na magdidirect sa home page 
na may /home na path, hindi dapat bigyan ng page ang dashboard, kailangan pumili ng 
homepage na parang magsisilbing default page na dito laging ididirect kung may nakalogged 
in na  user.
/home - ang dapat na default page pero magiging mali kung gagawin kasi ito ay may ibang 
kaparehas na level sa hierarchy kasi ito ay isa sa mga set of links sa dashboard.

level of hierarchy
- note: dapat na magkapantay talaga ang dashboard at login para pwedeng magshift between 
each other.
- note: dapat na magkapantay talaga ang link items at contents of link items kasi ganoon 
naman talaga ang setup ng dashboard (ex. kinlick ang link item hindi yun mawawala kundi 
ipapakita lang ang content ng link item)


-login ('/login')
-dashboard ('/')
 -navlink item: home ('/home')
 -navlink item: about ('/about')
 -navlink item: more ('/more')
 -navcontent of each navlink item: home, about, and more

flow of direction
- '/login' redirects '/home'
- '/' redirects '/login'
- '/' renders navlink items at navcontents kung saan sa navcontents pag nomatch
magreredirect sa home na parang magsisilbing default page sa loob ng dashboard.
- note: hindi pwedeng magredirect sa home, about, and more ang dashboard '/' dahil anak nya ang mga ito.

*/

// Router4 { ...

// *** NOTES ***

/*
. Following items used and imported from packages:

 * NavLink - similar to Link
 * Switch - is used to enclosed a set of Route Instances to only
choose one from them unlike regular Route Intances.

. Things learned:

 * using component, render (must pass props using anonymous function to provide the following, otherwise nothing to receive), and children attribute of Route,
and withRouter() function of Router provide you the following:
 ...note the following items below may be received by a component
via props, but to address to these or access data from these, must
state like their counterparts (appear on their right after the equal sign)
 -> location = props.location (location is an object with set of properties including pathname which refers to the path you are at)
 -> history = props.history (history is an object with set of properties including location object, but is not advisable to get the
pathname property of its location object, since it is mutable. However, this object is used to push path...
 -> match = props.match
 
 * Importance of Redirect Instance once nothing in the set of Routes
is similar (NO MATCH) with the link clicked or path entered in the url textbox.
*/

// *** CODES ***

const Router4 = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink to = '/home'>Home</NavLink></li>
        <li><NavLink to = '/about'>About</NavLink></li>
        <li><NavLink to = '/more'>More</NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path = '/home' component = {Match} />
        <Route exact path = '/about' component = {Match} />
        <Route exact path = '/more' component = {Match} />
        <Route component = {NoMatch} />
      </Switch>
    </div>
  </Router>
);

/*
{match} in braces is used to receive match object from the caller of the instance,
receiving it via props will be needing you to write it as *props.match* to access
the match object. {match} is just used for more convenient and short code-writing.
*/
const Match = ({match}) => (
  <h3>{match.url}</h3>
);;

const NoMatch = () => (
  <Redirect to = '/home' />
);

// ... } Router4

// Router5 { ...

// *** NOTES ***

/*
. Things Learned:
 * In render attribute of Route Instance, passing props in anonymous function is done to make the Instance (Instance specified in the render attribute to render UI as a Route matches with Link invoked) receive history, location, and match object.
 * props may be used to receive what Route Intance and withRouter() function provide match, history, and location but will be needing you to write it as *props.match* for match, *props.location* for location, etc. to access those.

. Things Featured:
 * Switch plus Redirect (especially for handling No Match Path Results) plus exact attribute

*/

// *** CODES -- some errors ***

// class Router5 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       'path': '/home',
//       'input': '/home',
//       'submitted': false
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.submitPathLink = this.submitPathLink.bind(this);
//     this.submitPathInput = this.submitPathInput.bind(this);
//     this.setSubmittedToFalse = this.setSubmittedToFalse.bind(this);
//     this.setPathInput = this.setPathInput.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]:e.target.value
//     });
//   }

//   submitPathLink(path) {
//     this.setState({
//       'path': path,
//       'input': path
//     });
//   }

//   submitPathInput() {
//     this.setState({
//       'submitted': true
//     });
//   }

//   setSubmittedToFalse() {
//     this.setState({
//       'submitted': false
//     });
//   }

//   setPathInput(path) {
//     this.setState({
//       'path': path,
//       'input': path,
//       'submitted': false
//     });

//     console.log('setPathInput(path) =', path);
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul style = {{listStyleType: 'none'}}>
//             <li onClick = {this.submitPathLink.bind(this, '/home')}><NavLink to = '/home'>Home</NavLink></li>
//             <li onClick = {this.submitPathLink.bind(this, '/about')}><NavLink to = '/about'>About</NavLink></li>
//             <li onClick = {this.submitPathLink.bind(this, '/more')}><NavLink to = '/more'>More</NavLink></li>
//             <li>
//               <RouteInput handleChange = {this.handleChange} submitPathInput = {this.submitPathInput} input = {this.state.input} submitted = {this.state.submitted} />
//             </li>
//             <hr />
//             <Switch>
//               {console.log('separator')}

//               <Route exact path = '/home' render = {(props) => <Match {...props} setPathInput = {this.setPathInput} path = {this.state.path} />} submitted = {this.state.submitted} />
//               <Route exact path = '/about' render = {(props) => <Match {...props} setPathInput = {this.setPathInput} path = {this.state.path} />} submitted = {this.state.submitted} />
//               <Route exact path = '/more' render = {(props) => <Match {...props} setPathInput = {this.setPathInput} path = {this.state.path} />} submitted = {this.state.submitted} />
//               <Route component = {(props) => <NoMatch {...props} setPathInput = {this.setPathInput} path = {this.state.path} submitted = {this.state.submitted} />} />

//             </Switch>
//           </ul>
//         </div>
//       </Router>
//     );
//   }
// }

// const RouteInput = withRouter((props) => {
//   return (
//     <div>
//       {console.log('form separator =', props.location.pathname, 'submitted =', props.submitted)}
//       {props.submitted && props.location.pathname !== props.input ? <Redirect to = {props.input} /> : null}
//       <input type = 'text' name = 'input' value = {props.input} onChange = {props.handleChange.bind(this)} />
//       <input type = 'button' value = 'Submit Path Input' onClick = {props.submitPathInput.bind(this)} />
//     </div>
//   );
// })

// const Match = (props) => {
//   if (props.path !== props.location.pathname || props.submitted) {
//     props.setPathInput(props.location.pathname);
//   }

//   console.log('match =', props.location.pathname);
  
//   return <h3>{props.location.pathname}</h3>;
// }

// const NoMatch = (props) => {
//   if (props.path !== '/home' || props.submitted) {
//     console.log('nomatch.setting state =', '/home');

//     props.setPathInput('/home');
//   }

//   console.log('nomatch.out =', props.location.pathname);

//   if (props.location.pathname !== '/home') {
//     console.log('nomatch.in.if =', props.location.pathname);
//     return <Redirect to = '/home' />;
//   }
//   else {
//     console.log('nomatch.in.else =', props.location.pathname);
//     return <h3>{props.location.pathname}</h3>;
//   }
// }

// ... } Router5

// Router6 { ...

// *** NOTES ***

/*
. Features the proper way of creating a login page where:
 * login must be on the same level of hierarchy of dashboard items to help you switch from login to dashboard or vice versa
 
 * dashboard must be the default page that redirects to one of its item most common is the item home not the login page;
 * do not give dashboard an actual UI;
 * make dashboard having only forward slash as its path to make user get here, and from there, the web application will evaluate its status based on logged user.
If someone is logged redirects to home (not totally redirect just render the navigation and content, and in content, the redirecting will be held),
otherwise will redirect you automatically to login page.
*/

// *** CODES ***

// class Router6 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       'user': {
//         'isLoggedIn': false,
//         'username': '',
//         'password': ''
//       }
//     }

//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   login(user, e) {
//     e.preventDefault();

//     this.setState({
//       'user': {
//         'isLoggedIn': true,
//         'username': user.username,
//         'password': user.password
//       }
//     });
//   }

//   logout() {
//     this.setState({'user': {
//       'isLoggedIn': false
//       }
//     });
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <RouteAuth user = {this.state.user} logout = {this.logout} />
//           <Route path = '/login' render = {(props) => <RouteLogin {...props} isLoggedIn = {this.state.user.isLoggedIn} login = {this.login} />} />
//           <Route path = '/' render = {(props) => <RouteDashBoard {...props} user = {this.state.user} />} />
//         </div>
//       </Router>
//     );
//   }
// }

// const RouteAuth = withRouter(
//   (props) => {
//     console.log('auth =', props.history);

//     if (props.user.isLoggedIn) {
//       return (
//         <div>
//           <p>Welcome, {props.user.username}!</p>
//           <input type = 'button' value = 'Logout' onClick = {props.logout.bind(this)} />
//         </div>
//       ); 
//     }
//     return (
//       <p>You are not logged in!</p>
//     );
//   }
// );

// class RouteLogin extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       'username': '',
//       'password': ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   render() {
//     console.log('login =', this.props.location.pathname);

//     if (this.props.isLoggedIn) {
//       return <Redirect to = '/home' />;
//     }

//     return (
//       <form onSubmit = {this.props.login.bind(this, this.state)}>
//         <input type = 'text' name = 'username' value = {this.state.username} onChange = {this.handleChange.bind(this)} />
//         <input type = 'text' name = 'password' value = {this.state.password} onChange = {this.handleChange.bind(this)} />
//         <input type = 'submit' value = 'Login' />
//       </form>
//     );
//   }
// }

// const RouteDashBoard = (props) => {
//   console.log(`dashboard = ${props.location.pathname}, condition = ${!props.user.isLoggedIn} && ${props.location.pathname !== '/login'}`);

//   if (!props.user.isLoggedIn && props.location.pathname !== '/login') {
//     return <Redirect to = '/login' />;
//   }
//   else if (props.user.isLoggedIn) {
//     return (
//       <div>
//         <DashBoardNavigation />
//         <DashBoardContent />
//       </div>
//     );
//   }
//   else {
//     return null;
//   }
// }

// const DashBoardNavigation = () => (
//   <div>
//     <ul>
//       <li><NavLink to = '/home'>Home</NavLink></li>
//       <li><NavLink to = '/about'>About</NavLink></li>
//       <li><NavLink to = '/more'>More</NavLink></li>
//     </ul>
//     <hr />
//   </div>
// );

// const DashBoardContent = () => (
//   <Switch>
//     <Route to = '/home' component = {Match} />
//     <Route to = '/about' component = {Match} />
//     <Route to = '/more' component = {Match} />
//     <Route component = {NoMatch} />
//   </Switch>
// );

// const Match = ({location}) => (
//   <h3>{location.pathname}</h3>
// );

// const NoMatch = () => <Redirect to = '/home' />

// ... } Router6

ReactDOM.render(
  <Router4 />,
  document.getElementById('root')
);