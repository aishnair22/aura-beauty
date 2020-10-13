import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils'

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        {/* <Route exact path="/" component={Home} /> */}

        {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);