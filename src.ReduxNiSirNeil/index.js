import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(logger)
    )
)

const element = (
    <BrowserRouter>
        <Provider store={store}>
            <Root/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    element, 
    document.getElementById('root')
);

registerServiceWorker();