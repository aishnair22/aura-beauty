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

export const queryProducts = (query) => {
    return $.ajax({
        method: 'get',
        url: "/api/products",
        data: {
            search: query
        }
    })
}