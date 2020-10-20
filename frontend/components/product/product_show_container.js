import { connect } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions'
import { fetchAllShades } from '../../actions/shade_actions'
import { fetchCategories } from '../../actions/category_actions'
import { selectShadesByProduct } from '../../reducers/selectors'

const mSTP = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    
    return ({
        product: state.entities.products[productId],
        productId: productId,
        shades: selectShadesByProduct(state.entities.shades, productId)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchAllShades: () => dispatch(fetchAllShades()),
        fetchCategories: () => dispatch(fetchCategories())
    })
}

export default connect(mSTP, mDTP)(ProductShow)