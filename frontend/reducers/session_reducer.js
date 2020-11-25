import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"

const _nullSession = {
    currentUser: null,
    currentCart: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, 
                {
                    currentUser: action.user,
                    currentCart: action.user.cart
                }
            )
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state
    }
}

export default sessionReducer