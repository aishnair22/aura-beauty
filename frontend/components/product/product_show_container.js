import { connect } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions'
import { fetchAllShades } from '../../actions/shade_actions'
import { fetchCategories } from '../../actions/category_actions'
import { fetchAllCartItems, updateCartItem, createCartItem } from '../../actions/cart_item_actions'
import { selectShadesByProduct } from '../../reducers/selectors'

const mSTP = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    return ({
        product: state.entities.products[productId],
        productId: productId,
        shades: selectShadesByProduct(state.entities.shades, productId),
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.session.currentUser,
        currentCart: state.session.currentCart
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchAllShades: () => dispatch(fetchAllShades()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchAllCartItems: () => dispatch(fetchAllCartItems()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
    })
}

export default connect(mSTP, mDTP)(ProductShow)