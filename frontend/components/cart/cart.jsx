import React from 'react';
import CartItem from './cart_item'
import {Link} from 'react-router-dom'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllCartItems()
        this.props.fetchAllShades()
        this.props.fetchAllProducts()
    }

    render() {

        let subtotal = 0

        if (!this.props.cartItems.length) {
            return (
                <div style = {{ height: 1000, marginTop: 100 }}>Cart is Empty</div>
            )
        } else {
            this.props.cartItems.forEach((cartItem) => {
                subtotal += (cartItem.quantity * cartItem.product.price)
            })
        }

        return(
            <div className="cart">
                <div className="cart-header">
                    <h1>Your Bag</h1>
                    <Link to="/collections/all" className="continue-shopping">CONTINUE SHOPPING <i className="arrow-right"></i> </Link>
                </div>

                <div className="items-and-summary">
                    <ul className="cart-items">
                        {this.props.cartItems.map((cartItem, idx) => {
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
                            
                            return <CartItem key={idx} cartItem={cartItem} photoUrl={photoUrl} updateCartItem={this.props.updateCartItem} deleteCartItem={this.props.deleteCartItem} />
                        })}
                    </ul>

                    <div>
                        <h1>Order Summary</h1>
                        <h2>Subtotal: ${subtotal}.00</h2>
                        <h2>Shipping: $4.99</h2>
                        <h2>Tax: ${(subtotal * 0.0875).toFixed(2)}</h2>
                        <h2>Total: ${((subtotal + (subtotal * 0.0875) + 4.99)).toFixed(2)}</h2>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Cart


