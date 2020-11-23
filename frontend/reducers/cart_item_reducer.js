import { RECEIVE_ALL_CART_ITEMS, DELETE_CART_ITEM } from '../actions/cart_item_actions'

const cartItemReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return action.cartItems
        case DELETE_CART_ITEM:
            delete newState[action.cartItem.id];
            return newState;
        default:
            return state
    }
}

export default cartItemReducer
