import * as CartItemApiUtil from "../util/cart_item_api_util"

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

const receiveAllCartItems = (cartItems) => {
    return ({
        type: RECEIVE_ALL_CART_ITEMS,
        cartItems
    })
}

const destroyCartItem = (cartItem) => {
    return ({
        type: DELETE_CART_ITEM,
        cartItem
    })
}

export const fetchAllCartItems = () => (dispatch) => {
    return CartItemApiUtil.fetchAllCartItems()
        .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
}

export const createCartItem = (cartItem) => (dispatch) => {
    return CartItemApiUtil.createCartItem(cartItem)
        .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
}

export const updateCartItem = (cartItem) => (dispatch) => {
    return CartItemApiUtil.updateCartItem(cartItem)
        .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
}

export const deleteCartItem = (cartItemId) => (dispatch) => {
    return CartItemApiUtil.deleteCartItem(cartItemId)
        .then(cartItem => dispatch(destroyCartItem(cartItem)))
}