import { connect } from 'react-redux';
import Header from './header';
import {withRouter} from 'react-router-dom'
import { fetchAllCartItems } from '../../actions/cart_item_actions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    cartItems: Object.values(state.entities.cartItems)

});

const mapDispatchToProps = (dispatch) => ({
    fetchAllCartItems: () => dispatch(fetchAllCartItems())    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
