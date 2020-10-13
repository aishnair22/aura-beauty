import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, withRouter } from "react-router-dom"

const mapStateToProps = (state) => {
    return ({
        loggedIn: Boolean(state.session.currentUserId) //whether or not we are logged in
    })
}

//redirect our users to homepage if they are logged in and they are trying to access login/sign up

const Auth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route
            path={path}
            render={(props) => (
                loggedIn ? <Redirect to="/" /> : <Component {...props} />
            )}
        />
    )
}

//protected route: show our users the login form if they are not logged in and they are trying to write a review

// const Protected = ({ loggedIn, path, component: Component }) => {
//     return (
//         <Route
//             path={path}
//             render={(props) => (
//                 loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
//             )}
//         />
//     )
// }

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
// export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
