import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"
// import { deleteCartItem, fetchAllCartItems, createCartItem, updateCartItem } from './actions/cart_item_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUser: window.currentUser,
                currentCart: window.currentUser.cart,
            }
        };
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root);

    //testing
    window.store = store
    window.dispatch = store.dispatch
    // window.fetchAllCartItems = fetchAllCartItems
    // window.deleteCartItem = deleteCartItem
    // window.createCartItem = createCartItem
    // window.updateCartItem = updateCartItem
})

