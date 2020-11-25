import { combineReducers } from 'redux';
import productReducer from './product_reducer';
import categoryReducer from './category_reducer'
import shadeReducer from './shade_reducer';
import cartItemReducer from './cart_item_reducer'

const entitiesReducer = combineReducers({
    products: productReducer,
    shades: shadeReducer,
    categories: categoryReducer,
    cartItems: cartItemReducer,
});

export default entitiesReducer