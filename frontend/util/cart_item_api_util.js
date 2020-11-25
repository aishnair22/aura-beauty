export const fetchAllCartItems = () => {
    return $.ajax({
        method: 'get',
        url: '/api/cart_items'
    })
}

export const createCartItem = (cartItem) => {
    return $.ajax({
        method: "post",
        url: "/api/cart_items",
        data: { cart_item: cartItem }
    })
}

export const updateCartItem = (cartItem) => {
    return $.ajax({
        method: "patch",
        url: `/api/cart_items/${cartItem.id}`,
        data: { cart_item: cartItem }
    })
}

export const deleteCartItem = (cartItemId) => {
    return $.ajax({
        method: "delete",
        url: `/api/cart_items/${cartItemId}`
    })
}

export const deleteAllCartItems = () => {
    return $.ajax({
        method: "delete",
        url: "api/cart_items"
    })
}