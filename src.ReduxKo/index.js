import React from 'react';
import ReactDOM from 'react-dom';

import * as API from './Array';

import Cart from './Cart'
import Card from './Card';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);

/*

-main
  -catalog
    -catalogcontent
      -catalogheader
      -catalogcontentcards
        -card
  -cart
    -card

*/

class Main extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     'fruits': this.props.fruits
  //   }
  // }

  render() {
    return (
      <div>
        {/* <Catalog fruits = {this.state.fruits} /> */}
        <Catalog />
        <hr />
        <Cart />
      </div>
    );
  }
}

class Catalog extends React.Component {
  render() {
    return <CatalogContent />
  }
}

class CatalogContent extends React.Component {
  render() {
    return (
      <div>
        <CatalogContentHeader />
        <CatalogContentBody />
        {/* <CatalogContentBody {...this.props} /> */}
      </div>
    );
  }
}

class CatalogContentHeader extends React.Component {
  render() {
    return (
      <div>
        <h3>Catalog</h3>
        <p>It contains items you can pass to Cart</p>
      </div>
    )
  }
}

class CatalogContentBody extends React.Component {
  render() {
    const items = API.fetchArray().map((fruit) => <Card key = {fruit.id} fruit = {fruit} AddorRemove = {true} />);
    return items;
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

/*
index

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer';

*/

/*
reducer

import { combineReducers } from 'redux'
import { CART_ACTION_ADD, CART_ACTION_REMOVE } from './actions';

// start...

import { combineReducers } from 'redux'
import { CART_ACTION_ADD, CART_ACTION_REMOVE } from './actions';

const initialCartState = {
    items: []
}

function cart (state = initialCartState, action) {
    switch (action.type) {
        case CART_ACTION_ADD: {
            const { item } = action

            return {
                ...state,
                items: [
                    ...state.items,
                    item
                ]
            }
        }
        case CART_ACTION_REMOVE: {
            const { item } = action

            return {
                ...state,
                items: state.items.filter(oldItem => oldItem.label !== item.label)
            }
        }
        default: {

            return {
                ...state
            }
        }
    }
}

export default combineReducers({cart})

*/

/*
actions

// start...

export const CART_ACTION_ADD = "CART_ACTION_ADD"
export const CART_ACTION_REMOVE = "CART_ACTION_REMOVE"

export function addToCart ({item}) {
    return {
        type: CART_ACTION_ADD,
        item
    }
}

export function removeFromCart ({item}) {
    return {
        type: CART_ACTION_REMOVE,
        item
    }
}

*/