import * as ProductApiUtil from '../util/product_api_util'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"


const receiveAllProducts = (products) => {
    return ({
        type: RECEIVE_ALL_PRODUCTS,
        products
    })
}

const receiveProduct = (product) => {
    return ({
        type: RECEIVE_PRODUCT,
        product
    })
}

export const fetchAllProducts = () => (dispatch) => {
    return ProductApiUtil.fetchAllProducts()
        .then(products => dispatch(receiveAllProducts(products)))
}

export const fetchProduct = (productId) => (dispatch) => {
    return ProductApiUtil.fetchProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
}

export const queryProducts = (query) => (dispatch) => {
    return ProductApiUtil.queryProducts(query)
        .then(products => dispatch(receiveAllProducts(products)))
}