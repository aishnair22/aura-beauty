export const fetchAllProducts = () => {
    return $.ajax({
        method: 'get',
        url: '/api/products'
    })
}

export const fetchProduct = (productId) => {
    return $.ajax({
        method: 'get',
        url: `/api/products/${productId}`
    })
}