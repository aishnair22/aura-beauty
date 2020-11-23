import React from 'react';
import CartItem from './cart_item'

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

        if (!this.props.cartItems.length) {
            return (
                <div style = {{ height: 1000, marginTop: 100 }}>Cart is Empty</div>
            )
        }

        return(
            <div style={{height: 1000, marginTop: 100}}>
                <ul>  
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
            </div>
        )

    }
}

export default Cart


