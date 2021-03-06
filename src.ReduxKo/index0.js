import React from 'react';
import ReactDOM from 'react-dom';

// index { ...

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

// IMPORT reducer

// ... } index


// reducer { ...

// import { combineReducers } from 'redux'

// IMPORT { CART_ACTION_ADD, CART_ACTION_REMOVE } from actions

// actions { ...

const CART_ACTION_ADD = "CART_ACTION_ADD"
const CART_ACTION_REMOVE = "CART_ACTION_REMOVE"

function addToCart ({item}) {
    return {
        type: CART_ACTION_ADD,
        item
    }
}

function removeFromCart ({item}) {
    return {
        type: CART_ACTION_REMOVE,
        item
    }
}

// ... } actions

const initialCartState = {
  items: []
}

// export default combineReducers({cart})

function reducer(state = initialCartState, action) {
  switch(action.type) {
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

// ... } reducer


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


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result;
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
  constructor(props) {
    super(props);

    this.state = {
      'fruits': this.props.fruits
    }
  }

  render() {
    return (
      <div>
        <Catalog />
        <Cart fruits = {this.state.fruits} />
      </div>
    );
  }
}

class Catalog extends React.Component {
  render() {
    return null;
  }
}

class Cart extends React.Component {
  render() {
    const items = this.props.fruits.map((fruit) => <Card key = {fruit.id} fruit = {fruit} AddorRemove = {true} />);
    return items;
  }
}

class CatalogContent extends React.Component {
  render() {
    return null;
  }
}

class CatalogContentHeader extends React.Component {
  render() {
    return null;
  }
}

class CatalogContentBody extends React.Component {
  render() {
    return null;
  }
}

class Card extends React.Component {
  render() {
    const {fruit, AddorRemove} = this.props;

    return (
      <div>
        <p>id: {fruit.id}</p>
        <ul style = {{listStyleType: 'none'}}>
          <li>name: {fruit.name}</li>
          <li>price: P {fruit.price}.00</li>
          <li>{AddorRemove && <input type = 'button' value = 'Add' />}</li>
          <li>{!AddorRemove && <input type = 'button' value = 'Remove' />}</li>
        </ul>
      </div>
    );
  }
}

const array = [
  {
    'id': '001',
    'name': 'apple',
    'price': 5
  },
  {
    'id': '002',
    'name': 'banana',
    'price': 3
  },
  {
    'id': '003',
    'name': 'chico',
    'price': 1
  },
  {
    'id': '004',
    'name': 'dragon fruit',
    'price': 5
  },
  {
    'id': '005',
    'name': 'egg plant',
    'price': 2
  }
];

ReactDOM.render(
  <Provider>
    <Main fruits = {array} />
  </Provider>,
  document.getElementById('root')
);