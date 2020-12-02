import React from 'react';
import CartItem from './cart_item'
import {Link} from 'react-router-dom'
import LoadingPage from '../loading'
import CartNumber from '../cart/cart_number'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {update: 0, checkedOut: "", rendered: false}
        this.updatedLocalStorage = this.updatedLocalStorage.bind(this)
        this.guestCheckout = this.guestCheckout.bind(this)
        this.userCheckout = this.userCheckout.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchAllCartItems()
        }
        this.props.fetchAllShades()
        this.props.fetchAllProducts()
            .done(() => this.setState({ rendered: true })) 
    }

    updatedLocalStorage() {
        this.setState({update: this.state.update + 1})
    }

    guestCheckout(e) {
        e.preventDefault()
        this.setState({ checkedOut: "is-open" })
        localStorage.clear()
    }
    
    userCheckout(e) {
        e.preventDefault()
        this.setState({ checkedOut: "is-open" })
        this.props.deleteAllCartItems()
    }
    
    closeModal() {
        this.setState({ checkedOut: "" })
    }

    render() {

        if (!this.state.rendered) {
            return <LoadingPage />
        }

        let cartItems
        let buttons
        if (this.props.currentUser) {
            cartItems = this.props.cartItems
            buttons = <button onClick={this.userCheckout} className="checkout-button">CHECKOUT</button>
        } else {
            cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
            buttons = (
                <div className="checkout-buttons">
                    <button onClick={this.guestCheckout} className="checkout-button">GUEST CHECKOUT</button>
                    <Link className="signup-link" to="/login">Already have an account? Login here.</Link>
                </div>
            )
        }

        let subtotal = 0
        let itemsSection
        
        if (!cartItems.length) {
            itemsSection = <div className="cart-items">
                <h1 className="empty-cart">Your bag is currently empty.</h1>
            </div>
        } else {
            cartItems.forEach((cartItem) => {
                subtotal += (cartItem.quantity * cartItem.product.price)
            })

            itemsSection = (
                <ul className="cart-items">
                    {cartItems.map((cartItem, idx) => {
                        let productShade = null
                        this.props.shades.forEach((shade) => {
                            if (cartItem.shade && shade.id === cartItem.shade.id) {
                                productShade = shade
                            }
                        })

                        let photoUrl
                        if (productShade) {
                            photoUrl = productShade.productPhoto
                        } else {
                            this.props.products.forEach((product) => {
                                if (cartItem.product && product.id === cartItem.product.id) {
                                    photoUrl = product.photoUrls[0]
                                }
                            })
                        }
                        let localStorageIdx = idx

                        return <CartItem key={idx} updatedLocalStorage={this.updatedLocalStorage} localStorageIdx={localStorageIdx} cartItem={cartItem} cartItems={this.props.cartItems} photoUrl={photoUrl} updateCartItem={this.props.updateCartItem} deleteCartItem={this.props.deleteCartItem} currentUser={this.props.currentUser} />
                    })}
                </ul>
            )
        }

        let shipping
        if (subtotal === 0) {
            shipping = 0
        } else {
            shipping = 4.99
        }

        let cartNumber
        if (!this.props.currentUser) {
            cartNumber = <CartNumber />
        }

        return(
            <div className="cart">
                {cartNumber}
                
                <div className="cart-header">
                    <h1>Your Bag</h1>
                    <Link to="/collections/all" className="continue-shopping">CONTINUE SHOPPING <i className="arrow-right"></i> </Link>
                </div>

                <div className="items-and-summary">
                    {itemsSection}

                    <div className="order-summary">
                        <h1>Order Summary</h1>
                        <div className="summary-item">
                            <h2>Subtotal</h2>
                            <h2>${subtotal}.00</h2>
                        </div>
                        <div className="summary-item">
                            <h2>Shipping</h2>
                            <h2>${shipping.toFixed(2)}</h2>
                        </div>
                        <div className="summary-item">
                            <h2>Tax</h2>
                            <h2>${(subtotal * 0.0875).toFixed(2)}</h2>
                        </div>
                        <div className="horizontal-line" />
                        <div className="summary-item">
                            <h3>Total</h3>
                            <h3>${((subtotal + (subtotal * 0.0875) + shipping)).toFixed(2)}</h3>
                        </div>
                        
                        {buttons}

                        <div className={`modal ${this.state.checkedOut}`}>
                            <div className="checkout-modal">
                                <span>Aura Beauty</span>
                                <h6>created by Aishwarya Nair</h6>
                                <h4>Thank you for your purchase!</h4>
                                <button onClick={this.closeModal}>BACK TO WEBSITE</button>
                            </div>
                            <div className="checkout-modal-screen" onClick={this.closeModal}></div>
                        </div>

                    </div>
                </div>
                
            </div>
        )

    }
}

export default Cart


