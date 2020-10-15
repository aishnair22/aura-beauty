export const fetchProduct = (productId) => {
    return $.ajax({
        method: 'get',
        url: `/api/products/${productId}`
    })
}

export const fetchProducts = () => {
    return $.ajax({
        method: 'get',
        url: '/api/products'
    })
}

export const fetchProductsByCategory = (categoryId) => {
    return $.ajax({
        method: 'get',
        url: `/api/categories/${categoryId}/products`
    })
}