export const CART_ACTION_ADD = "CART_ACTION_ADD"
export const CART_ACTION_REMOVE = "CART_ACTION_REMOVE"

export function addToCart ({item},{date}) {
    return {
        type: CART_ACTION_ADD,
        item,
        date
    }
}

export function removeFromCart ({item}) {
    return {
        type: CART_ACTION_REMOVE,
        item
    }
}