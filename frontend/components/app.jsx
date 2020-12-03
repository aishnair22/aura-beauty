import React from 'react';
import ScrollToTop from './ScrollToTop'
import HeaderContainer from './header/header_container';
import Footer from './footer/footer'
import SplashContainer from './splash/splash_container'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import AccountContainer from './header/account_container'
import AllProductsContainer from './product/all_products_container'
import FaceContainer from './product/face_container'
import LipContainer from './product/lip_container'
import EyeContainer from './product/eye_container'
import ToolsContainer from './product/tools_container'
import ProductShowContainer from './product/product_show_container'
import CartContainer from './cart/cart_container'
import SearchContainer from './search/search_container'
import NotFoundPage from './not_found/not_found_page'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

export default () => (
    <div>
        <header>
            < HeaderContainer />
        </header>
        <ScrollToTop />

        <Switch> 
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/collections/all" component={AllProductsContainer} />
            <Route exact path="/collections/face" component={FaceContainer} />
            <Route exact path="/collections/lip" component={LipContainer} />
            <Route exact path="/collections/eye" component={EyeContainer} />
            <Route exact path="/collections/tools" component={ToolsContainer} />
            <Route exact path="/products/:productName~:productId" component={ProductShowContainer} />
            <Route exact path="/cart" component={CartContainer}/>
            <Route exact path="/search/:query" component={SearchContainer}/>
            <ProtectedRoute exact path="/account" component={AccountContainer}/>
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <Route exact path="/:anythingelse" component={NotFoundPage} />
        </Switch>

        <footer>
            < Footer />
        </footer>
    </div>
);
