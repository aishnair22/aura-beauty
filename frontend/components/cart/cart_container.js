import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchAllCartItems, updateCartItem, deleteCartItem, deleteAllCartItems } from '../../actions/cart_item_actions'
import { fetchAllShades } from '../../actions/shade_actions'
import { fetchAllProducts } from '../../actions/product_actions'
import Cart from './cart';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    cartItems: Object.values(state.entities.cartItems),
    shades: Object.values(state.entities.shades),
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    fetchAllShades: () => dispatch(fetchAllShades()),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
    deleteAllCartItems: () => dispatch(deleteAllCartItems())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
