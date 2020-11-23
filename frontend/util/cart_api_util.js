export const fetchCart = (cartId) => {
    return $.ajax({
        method: 'get',
        url: `/api/carts/${cartId}`
    })
}

export const postCart = (cart) => {
    return $.ajax({
        method: 'post',
        url: '/api/carts',
        data: { cart }
    })
}