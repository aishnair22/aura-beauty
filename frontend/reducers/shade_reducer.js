import { RECEIVE_ALL_SHADES } from "../actions/shade_actions"

const shadeReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_SHADES:
            return action.shades
        default:
            return state
    }
}

export default shadeReducer