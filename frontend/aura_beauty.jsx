import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"
import { selectShadesByProduct} from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState)
    ReactDOM.render(<Root store={store} />, root);

    //testing
    window.store = store
    window.dispatch = store.dispatch
    window.selectShadesByProduct = selectShadesByProduct
})