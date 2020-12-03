import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Search from './search';
import { fetchAllShades } from '../../actions/shade_actions'
import { queryProducts } from '../../actions/product_actions'
import { fetchAllCartItems, createCartItem, updateCartItem } from '../../actions/cart_item_actions'

const mapStateToProps = (state) => {
    return ({
        products: Object.values(state.entities.products),
        shades: Object.values(state.entities.shades),
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.session.currentUser,
        currentCart: state.session.currentCart
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchAllShades: () => dispatch(fetchAllShades()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    queryProducts: (query) => dispatch(queryProducts(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
