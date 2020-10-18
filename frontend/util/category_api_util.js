export const fetchCategories = () => {
    return $.ajax({
        method: 'get',
        url: '/api/categories'
    })
}