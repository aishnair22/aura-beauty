import React from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from '../loading'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.cartItem.id,
            cart_id: props.cartItem.cart_id,
            product_id: props.cartItem.product.id,
            quantity: props.cartItem.quantity
        }
        if (props.cartItem.shade) {
            this.state.shade_id = props.cartItem.shade.id
        }
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
    }

    handleUpdateQuantity(e) {
        e.preventDefault()       
        
        if (this.props.cartItems.length) {
            this.setState({ quantity: e.target.value }, () => this.props.updateCartItem(this.state))        
        } else {
            let cartItems = JSON.parse(localStorage.getItem('cartItems'))
            cartItems[this.props.localStorageIdx].quantity = e.target.value
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            this.setState({ quantity: e.target.value })
            this.props.updatedLocalStorage()
        }
    }

    handleRemoveItem(e) {
        e.preventDefault()
        if (this.props.cartItems.length) {
            this.props.deleteCartItem(this.props.cartItem.id)
        } else {
            let cartItems = JSON.parse(localStorage.getItem('cartItems'))
            cartItems.splice(this.props.localStorageIdx, 1)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            this.props.updatedLocalStorage()
        }
    }

    render() {
        const { product, quantity, shade } = this.props.cartItem
        let shadeName
        if (shade) {
            shadeName = `Shade: ${shade.name}`
        } else {
            shadeName = ""
        }

        return (                

            <div className="cart-item">

                <img src={this.props.photoUrl} />

                <div className="cart-item-middle-section">
                    <Link to={`/products/${product.name}~${product.id}`} className="cart-item-product-name">{product.name}</Link>
                    <h1 className="cart-item-shade-name">{shadeName}</h1>
                </div>

                <div className="cart-item-last-section">
                    <select className="cart-item-quantity" value={this.state.quantity} onChange={this.handleUpdateQuantity} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <h2 className="cart-item-price">${product.price * quantity}.00</h2>

                    <button onClick={this.handleRemoveItem} className="remove-button">REMOVE</button>
                </div>
            </div>
        )
    }
}

export default CartItem

