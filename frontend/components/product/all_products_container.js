import { connect } from 'react-redux'
import ProductIndex from './product_index';
import { fetchAllProducts } from '../../actions/product_actions'
import { fetchCategories } from '../../actions/category_actions'
import { fetchAllShades } from '../../actions/shade_actions'

const mSTP = (state) => {
    return ({
        products: Object.values(state.entities.products),
        categoryName: "Shop All",
        shades: Object.values(state.entities.shades)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchAllShades: () => dispatch(fetchAllShades())
    })
}

export default connect(mSTP, mDTP)(ProductIndex)