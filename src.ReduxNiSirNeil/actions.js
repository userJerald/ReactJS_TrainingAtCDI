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