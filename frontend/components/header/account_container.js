import { connect } from "react-redux";
import Account from "./account"
import { logout } from '../../actions/session_actions';
import { fetchAllCartItems, createCartItem, updateCartItem } from '../../actions/cart_item_actions'

const mSTP = (state) => {
    return({
        currentUser: state.session.currentUser,
        currentCart: state.session.currentCart,
        userCartItems: state.entities.cartItems
    })
}

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchAllCartItems: () => dispatch(fetchAllCartItems()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    })
}

export default connect(mSTP, mDTP)(Account)