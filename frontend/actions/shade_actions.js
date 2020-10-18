import * as ShadeApiUtil from '../util/shade_api_util'

export const RECEIVE_ALL_SHADES = "RECEIVE_ALL_SHADES"

const receiveAllShades = (shades) => {
    return ({
        type: RECEIVE_ALL_SHADES,
        shades
    })
}

export const fetchAllShades = () => (dispatch) => {
    return ShadeApiUtil.fetchAllShades()
        .then(shades => dispatch(receiveAllShades(shades)))
}