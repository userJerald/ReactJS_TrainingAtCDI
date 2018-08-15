// TUT1 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           {/*
          
//           * initializing the to attribute with / will be defined as the HOME PAGE.
//           * what is specified in the to attribute will be the string identifier 
//           to which Component you wish the page to go once clicked.
        
//           */}
//           <Link to="/">Home</Link> 
//         </li>
//         <li>
//           <Link to="/about">About</Link> 
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />
          
//       {/*
      
//       * The Link Element is connected to the Route Element.
//       * what is specified in the attribute to will search through the following items with similar value
//       specified in the attribute path and once found will direct you to
//       the component assigned in the attribute component of the instance Route
      
//       * exact ???
//       */}

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     {/*

//     * topicID specified as that will be treated as the key of the value in match.url
//     * match object what is it

//     */}

//     <Route path={`${match.url}/:topicId`} component={Topic} /> 
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// export default BasicExample;

// ... } TUT1

// TUT2 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const ParamsExample = () => (
//   <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li>
//           <Link to="/netflix">Netflix</Link>
//         </li>
//         <li>
//           <Link to="/zillow-group">Zillow Group</Link>
//         </li>
//         <li>
//           <Link to="/yahoo">Yahoo</Link>
//         </li>
//         <li>
//           <Link to="/modus-create">Modus Create</Link>
//         </li>
//       </ul>

//       <Route path="/:id" component={Child} />

//       {/*
//          It's possible to use regular expressions to control what param values should be matched.
//             * "/order/asc"  - matched
//             * "/order/desc" - matched
//             * "/order/foo"  - not matched
//       */}
//       <Route
//         path="/order/:direction(asc|desc)"
//         component={ComponentWithRegex}
//       />
//     </div>
//   </Router>
// );

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// );

// const ComponentWithRegex = ({ match }) => (
//   <div>
//     <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//   </div>
// );

// export default ParamsExample;

// ... } TUT2

// TUT3 { ...

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// ////////////////////////////////////////////////////////////
// // 1. Click the public page
// // 2. Click the protected page
// // 3. Log in
// // 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;

// ... } TUT3

// TUT4 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const CustomLinkExample = () => (
//   <Router>
//     <div>
//       <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
//       <OldSchoolMenuLink to="/about" label="About" />
//       <hr />
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </div>
//   </Router>
// );

// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route
//     path={to}
//     exact={activeOnlyWhenExact}
//     children={({ match }) => (
//       <div className={match ? "active" : ""}>
//         {match ? "> " : ""}
//         <Link to={to}>{label}</Link>
//       </div>
//     )}
//   />
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// export default CustomLinkExample;

// ... } TUT4

// TUT5 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

// const PreventingTransitionsExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Form</Link>
//         </li>
//         <li>
//           <Link to="/one">One</Link>
//         </li>
//         <li>
//           <Link to="/two">Two</Link>
//         </li>
//       </ul>
//       <Route path="/" exact component={Form} />
//       <Route path="/one" render={() => <h3>One</h3>} />
//       <Route path="/two" render={() => <h3>Two</h3>} />
//     </div>
//   </Router>
// );

// class Form extends React.Component {
//   state = {
//     isBlocking: false
//   };

//   render() {
//     const { isBlocking } = this.state;

//     return (
//       <form
//         onSubmit={event => {
//           event.preventDefault();
//           event.target.reset();
//           this.setState({
//             isBlocking: false
//           });
//         }}
//       >
//         <Prompt
//           when={isBlocking}
//           message={location =>
//             `Are you sure you want to go to ${location.pathname}`
//           }
//         />

//         <p>
//           Blocking?{" "}
//           {isBlocking ? "Yes, click a link or the back button" : "Nope"}
//         </p>

//         <p>
//           <input
//             size="50"
//             placeholder="type something to block transitions"
//             onChange={event => {
//               this.setState({
//                 isBlocking: event.target.value.length > 0
//               });
//             }}
//           />
//         </p>

//         <p>
//           <button>Submit to stop blocking</button>
//         </p>
//       </form>
//     );
//   }
// }

// export default PreventingTransitionsExample;

// ... } TUT5

// TUT6 { ...

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";

// const NoMatchExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/old-match">Old Match, to be redirected</Link>
//         </li>
//         <li>
//           <Link to="/will-match">Will Match</Link>
//         </li>
//         <li>
//           <Link to="/will-not-match">Will Not Match</Link>
//         </li>
//         <li>
//           <Link to="/also/will/not/match">Also Will Not Match</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Redirect from="/old-match" to="/will-match" />
//         <Route path="/will-match" component={WillMatch} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

// const Home = () => (
//   <p>
//     A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
//     that matches. A <code>&lt;Route></code> with no <code>path</code> always
//     matches.
//   </p>
// );

// const WillMatch = () => <h3>Matched!</h3>;

// const NoMatch = ({ location }) => (
//   <div>
//     <h3>
//       No match for <code>{location.pathname}</code>
//     </h3>
//   </div>
// );

// export default NoMatchExample;

// ... } TUT6

// TUT7 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const PEEPS = [
//   { id: 0, name: "Michelle", friends: [1, 2, 3] },
//   { id: 1, name: "Sean", friends: [0, 3] },
//   { id: 2, name: "Kim", friends: [0, 1, 3] },
//   { id: 3, name: "David", friends: [1, 2] }
// ];

// const find = id => PEEPS.find(p => p.id === id);

// const RecursiveExample = () => (
//   <Router>
//     <Person match={{ params: { id: 0 }, url: "" }} />
//   </Router>
// );

// const Person = ({ match }) => {
//   const person = find(match.params.id);

//   return (
//     <div>
//       <h3>{person.name}’s Friends</h3>
//       <ul>
//         {person.friends.map(id => (
//           <li key={id}>
//             <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
//           </li>
//         ))}
//       </ul>
//       <Route path={`${match.url}/:id`} component={Person} />
//     </div>
//   );
// };

// export default RecursiveExample;

// ... } TUT7

// TUT8 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // Each logical "route" has two components, one for
// // the sidebar and one for the main area. We want to
// // render both of them in different places when the
// // path matches the current URL.
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

// const SidebarExample = () => (
//   <Router>
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           padding: "10px",
//           width: "40%",
//           background: "#f0f0f0"
//         }}
//       >
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/bubblegum">Bubblegum</Link>
//           </li>
//           <li>
//             <Link to="/shoelaces">Shoelaces</Link>
//           </li>
//         </ul>

//         {routes.map((route, index) => (
//           // You can render a <Route> in as many places
//           // as you want in your app. It will render along
//           // with any other <Route>s that also match the URL.
//           // So, a sidebar or breadcrumbs or anything else
//           // that requires you to render multiple things
//           // in multiple places at the same URL is nothing
//           // more than multiple <Route>s.
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.sidebar}
//           />
//         ))}
//       </div>

//       <div style={{ flex: 1, padding: "10px" }}>
//         {routes.map((route, index) => (
//           // Render more <Route>s with the same paths as
//           // above, but different components this time.
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.main}
//           />
//         ))}
//       </div>
//     </div>
//   </Router>
// );

// export default SidebarExample;

// ... } TUT8

// TUT9 { ...

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // Some folks find value in a centralized route config.
// // A route config is just data. React is great at mapping
// // data into components, and <Route> is a component.

// ////////////////////////////////////////////////////////////
// // first our route components
// //const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

// ////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );

// export default RouteConfigExample;

// ... } TUT9