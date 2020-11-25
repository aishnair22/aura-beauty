import { connect } from "react-redux"
import { createNewUser, clearErrors } from '../../actions/session_actions'
import { createCartItem } from '../../actions/cart_item_actions'
import Signup from './signup'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentCart: state.session.currentCart
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createNewUser: (formUser) => dispatch(createNewUser(formUser)),
        clearErrors: () => dispatch(clearErrors()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)