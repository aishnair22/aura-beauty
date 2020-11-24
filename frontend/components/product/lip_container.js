import { connect } from 'react-redux'
import ProductIndex from './product_index';
import { fetchAllProducts } from '../../actions/product_actions'
import { fetchCategories } from '../../actions/category_actions'
import { selectProductsByCategory } from '../../reducers/selectors'
import { fetchAllShades } from '../../actions/shade_actions'
import { fetchAllCartItems, createCartItem, updateCartItem } from '../../actions/cart_item_actions'


const mSTP = (state) => {
    return ({
        products: selectProductsByCategory(state, "Lip"),
        categoryName: "Lip",
        shades: Object.values(state.entities.shades),
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.session.currentUser,
        currentCart: state.session.currentCart
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchAllShades: () => dispatch(fetchAllShades()),
        fetchAllCartItems: () => dispatch(fetchAllCartItems()),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    })
}

export default connect(mSTP, mDTP)(ProductIndex)