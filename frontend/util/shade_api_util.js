export const fetchAllShades = () => {
    return $.ajax({
        method: 'get',
        url: '/api/shades'
    })
}