import { connect } from 'react-redux';
import Header from './header';
import {withRouter} from 'react-router-dom'
import { fetchAllCartItems } from '../../actions/cart_item_actions'
import { queryProducts } from '../../actions/product_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser,
        cartItems: Object.values(state.entities.cartItems)
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    queryProducts: (query) => dispatch(queryProducts(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
