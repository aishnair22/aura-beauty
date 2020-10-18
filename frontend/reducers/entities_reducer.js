import { combineReducers } from 'redux';
import productReducer from './product_reducer';
import categoryReducer from './category_reducer'
import shadeReducer from './shade_reducer';

const entitiesReducer = combineReducers({
    products: productReducer,
    shades: shadeReducer,
    categories: categoryReducer
});

export default entitiesReducer