import React from 'react'
import { withRouter } from 'react-router-dom';

class CartNumber extends React.Component {
    constructor(props) {
        super(props)
        this.handleCart = this.handleCart.bind(this)
    }
    
    handleCart(e) {
        e.preventDefault()
        this.props.history.push("/cart")
    }

    render() {
        let cartNumber = 0
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        
        if (cartItems.length) {
            cartItems.forEach((item) => {
                cartNumber += Number(item.quantity)
            })
        }

        return (
            <div className="cart-caption" onClick={this.handleCart}>{cartNumber}</div>
        )
    }
}

export default withRouter(CartNumber)