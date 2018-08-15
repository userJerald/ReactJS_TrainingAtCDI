import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from './containers/WeatherSearch';
// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd(action.type)
//     return result
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//     reducer,
//     composeEnhancers(
//       applyMiddleware(logger)
//     )
// )
class Element extends React.Component {
    render() {
        return (
                <WeatherSearch/>
        );
    }
}

ReactDOM.render(
    <Element/>, 
    document.getElementById('root'));
