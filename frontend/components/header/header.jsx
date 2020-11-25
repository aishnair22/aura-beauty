import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {updated: ""}
        this.handleAccount = this.handleAccount.bind(this)
        this.handleLogo = this.handleLogo.bind(this)
        this.handleCart = this.handleCart.bind(this)
        this.updatedLocalStorage = this.updatedLocalStorage.bind(this)
    }

    updatedLocalStorage() {
        this.setState({ update: "updated" })
    }

    componentDidMount() {
        this.props.fetchAllCartItems()
    }

    handleAccount(e) {
        e.preventDefault()
        this.props.currentUser ? (
            this.props.history.push("/account")
        ) : (
            this.props.history.push("/login")
        )
    }

    handleLogo(e) {
        e.preventDefault()
        this.props.history.push("/")
    }

    handleCart(e) {
        e.preventDefault()
        this.props.history.push("/cart")
    }

    render() {
        let cartItems
        let cartNumber = 0
        
        if (this.props.currentUser) {
            cartItems = this.props.cartItems
        } else {
            cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        }
        
        if (cartItems.length) {
            cartItems.forEach((item) => {
                cartNumber += Number(item.quantity)
            })
        }

        return (
            <header className="header">
                <div className="dropdown">
                    <Link to="/" className="dropdown-shop">SHOP</Link>
                    <div className="dropdown-content">
                        <Link to="/collections/all" className="dropdown-links" >Shop All                   
                            <img className="downdown-img" src={window.shopAll } />
                        </Link>
                        <Link to="/collections/face" className="dropdown-links" >Face
                            <img className="downdown-img" src={window.face } />                       
                        </Link>
                        <Link to="/collections/eye" className="dropdown-links" >Eye
                            <img className="downdown-img" src={window.eye } />                       
                        </Link>
                        <Link to="/collections/lip" className="dropdown-links" >Lip
                            <img className="downdown-img" src={window.lip } />
                        </Link>
                        <Link to="/collections/tools" className="dropdown-links" >Tools
                            <img className="downdown-img" src={window.tools } />
                        </Link>
                    </div>
                </div>
                <h1 className="logo" onClick={this.handleLogo}>Aura Beauty</h1>
                {/* <img className="search-icon" onClick={this.handleAccount} src={window.searchIcon} />  */}
                <img className="account-icon" onClick={this.handleAccount} src={window.accountIcon} /> 
                <div>
                    <img className="cart-icon" onClick={this.handleCart} src={window.cartIcon} /> 
                    <h2 className="cart-caption" onClick={this.handleCart}>{cartNumber}</h2>
                </div>
            </header>
        );
    }
} 




export default Header