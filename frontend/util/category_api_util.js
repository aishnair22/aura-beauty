// delete if you never use this:
// export const fetchCategory = (categoryId) => {
//     return $.ajax({
//         method: 'get',
//         url: `/api/categories/${categoryId}`
//     })
// }

export const fetchCategories = () => {
    return $.ajax({
        method: 'get',
        url: '/api/categories'
    })
}