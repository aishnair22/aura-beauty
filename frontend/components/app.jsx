import React from 'react';
import HeaderContainer from './header/header_container';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import AccountContainer from './header/account_container'
import NotFoundPage from './not_found/not_found_page'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils'

export default () => (
    <div>
        <Route path="/" component={HeaderContainer} /> 
        {/* above is rendered on all pages bc / is on all */}
        <Route path="/account" component={AccountContainer}/>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route exact path="/:anythingelse" component={NotFoundPage} />
    </div>
);
