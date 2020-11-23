import React from 'react'

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
        this.setState({ quantity: e.target.value }, () => this.props.updateCartItem(this.state))                
    }

    handleRemoveItem(e) {
        e.preventDefault()
        this.props.deleteCartItem(this.props.cartItem.id)
    }

    render() {
        const { product, quantity, shade } = this.props.cartItem
        let shadeName
        if (shade) {
            shadeName = shade.name
        } else {
            shadeName = ""
        }

        return (
            <div>
                <h1>{product.name}</h1>
                <h2>{shadeName}</h2>
                <h2>
                    <select value={this.state.quantity} onChange={this.handleUpdateQuantity} >
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
                </h2>
                <h2>${product.price * quantity}.00</h2>
                <div>
                    <button onClick={this.handleRemoveItem}>REMOVE</button>
                </div>

                <img src={this.props.photoUrl} style={{height: 250, width: 150}}/>
            </div>
        )
    }
}

export default CartItem

