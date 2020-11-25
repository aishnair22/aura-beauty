import { connect } from "react-redux";
import Account from "./account"
import { logout } from '../../actions/session_actions';
import { fetchAllCartItems } from '../../actions/cart_item_actions'

const mSTP = (state) => {
    return({
        currentUser: state.session.currentUser
    })
}

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchAllCartItems: () => dispatch(fetchAllCartItems())
    })
}

export default connect(mSTP, mDTP)(Account)