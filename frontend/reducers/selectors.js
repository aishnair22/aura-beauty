export const selectProductsByCategory = (state, categoryName) => {
    let categoryObject = Object.values(state.entities.categories).filter((category) => {
        return category.name === categoryName
    })

    return Object.values(state.entities.products).filter((product) => {
        return product.category_id === categoryObject[0].id
    })
}

export const selectShadesByProduct = (shades, productId) => {
    return Object.values(shades).filter((shade) => {
        return shade.product_id === Number(productId)
    })
}