import React from 'react';
import ScrollToTop from './ScrollToTop'
import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import AccountContainer from './header/account_container'
import NotFoundPage from './not_found/not_found_page'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils'

export default () => (
    <div>
        <header>
            < HeaderContainer />
        </header>
        <ScrollToTop />
        <Switch> 
            <Route exact path="/" component={SplashContainer} /> 
            {/* above is rendered on all pages bc / is on all */}
            <Route exact path="/account" component={AccountContainer}/>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <Route exact path="/:anythingelse" component={NotFoundPage} />
        </Switch>
    </div>
);
