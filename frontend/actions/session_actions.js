import { createUser, createSession, deleteSession } from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

//action creators: 

const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    })
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    })
}

const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};

const removeErrors = () => {
    return({
        type: CLEAR_ERRORS
    })
}
//thunk action creators:

export const createNewUser = (formUser) => (dispatch) => {
    return (
        createUser(formUser)
            .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const login = (formUser) => (dispatch) => {
    return (
        createSession(formUser)
            .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const logout = () => (dispatch) => {
    return (
        deleteSession()
            .then(() => dispatch(logoutCurrentUser()))
    )
} 

export const clearErrors = () => (dispatch) => {
    return(
        dispatch(removeErrors())
    )
}