import { combineReducers } from 'redux'
import { CART_ACTION_ADD, CART_ACTION_REMOVE } from './actions';

const initialCartState = {
    items: []
};

function cart (state = initialCartState, action) {
    switch (action.type) {
        case CART_ACTION_ADD: {
            const { item, date } = action
            return {
                ...state,
                items: [...state.items,{
                    item: item,
                    date: date
                }]
            }
        }
        case CART_ACTION_REMOVE: {
            const { item } = action
            return {
                ...state,
                items: state.items.filter(oldItem => oldItem.item.label !== item.label)
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