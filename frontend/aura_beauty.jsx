import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"
// import { deleteCartItem, fetchAllCartItems, createCartItem, updateCartItem } from './actions/cart_item_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let preloadedState = undefined;
    // window.currentUser = {
    //     "id": <%= current_user.id %>,
    //     "first_name": "<%= current_user.first_name %>",
    //     "last_name": "<%= current_user.last_name %>",
    //     "email": "<%= current_user.email %>"
    // }
    // window.currentCart = {
    //     "id": "<%= current_user.cart.id %>"
    // }
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
                currentCart: window.currentUser.cart,
            }
        };
    }
    const store = configureStore(preloadedState)
    ReactDOM.render(<Root store={store} />, root);

    //testing
    window.store = store
    window.dispatch = store.dispatch
    // window.fetchAllCartItems = fetchAllCartItems
    // window.deleteCartItem = deleteCartItem
    // window.createCartItem = createCartItem
    // window.updateCartItem = updateCartItem
})

