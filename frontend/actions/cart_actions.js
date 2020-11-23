import * as CartApiUtil from "../util/cart_api_util"

export const RECEIVE_CART = "RECEIVE_CART"
export const CREATE_CART = "CREATE_CART"

const receiveCart = (cart) => {
    return ({
        type: RECEIVE_CART,
        cart
    })
}

const postCart = (cart) => {
    return ({
        type: CREATE_CART,
        cart
    })
}

export const fetchCart = (cartId) => (dispatch) => {
    return CartApiUtil.fetchCart(cartId)
        .then(cart => dispatch(receiveCart(cart)))
}

export const createCart = (cart) => (dispatch) => {
    return CartApiUtil.postCart(cart)
        .then(cart => dispatch(postCart(cart)))
}