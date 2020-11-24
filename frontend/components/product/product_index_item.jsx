import React from 'react'
import { Link } from 'react-router-dom'

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { photoUrl: "", selectedShade: "", disabled: ""}
        this.handleShadeClick = this.handleShadeClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }
    
    handleShadeClick(shade) {
        this.setState({ photoUrl: shade.productPhoto, selectedShade: shade})
    }

    componentDidMount() {
        if (!this.props.productShades.length) {
            this.setState({photoUrl: this.props.product.photoUrls[0]})
        } else {
            this.setState({ photoUrl: this.props.productShades[0].productPhoto, selectedShade: this.props.productShades[0]})
        }
    }

    addToCart() {
        this.setState({ disabled: "disabled" })
        setTimeout(() => this.setState({ disabled: "" }), 2000)

        if (!this.props.currentUser) {
            // localstorage
            // if (!this.state.currentShade) {
            //     const cartItem = {
            //         product_id: this.props.product.id,
            //         quantity: 1
            //     }
            // } else {
            //     const cartItem = {
            //         product_id: this.props.product.id,
            //         quantity: 1,
            //         shade_id: this.state.currentShade.id
            //     }
            // }
        } else { // we are logged in
            if (this.props.currentCart) { // we have existing cart for this user
                debugger
                let currentProduct = this.props.product
                let matchingCartItem = this.props.cartItems.filter((itemObj) => {
                    if (itemObj.shade) {
                        return (itemObj.product.id === currentProduct.id && itemObj.shade.id === this.state.selectedShade.id)
                    } else {
                        return (itemObj.product.id === currentProduct.id)
                    }
                })

                if (matchingCartItem[0]) { // we have this item already, update the quantity
                    debugger
                    let updatedItem = {
                        id: matchingCartItem[0].id,
                        cart_id: matchingCartItem[0].cart_id,
                        product_id: currentProduct.id,
                        quantity: matchingCartItem[0].quantity + 1
                    }
                    if (matchingCartItem[0].shade) {
                        updatedItem.shade_id = matchingCartItem[0].shade.id
                    }
                    debugger
                    this.props.updateCartItem(updatedItem)
                } else { // we don't have this item, we create it
                    debugger
                    let newItem = {
                        cart_id: this.props.currentCart.id,
                        product_id: this.props.product.id,
                        quantity: 1
                    }
                    if (this.state.selectedShade) {
                        newItem.shade_id = this.state.selectedShade.id
                    }
                    debugger
                    this.props.createCartItem(newItem)
                }
            }
        }

    }
    
    render() {
        let cartButtonText
        if (this.state.disabled) {
            cartButtonText = "ADDED TO BAG!"
        } else {
            cartButtonText = "ADD TO BAG"
        }

        return (
            <div className="product-index-item">
                <Link to={`/products/${this.props.product.name}~${this.props.product.id}`}>
                    <div className="index-item-img-caption">
                        <img className="index-item-product-img" src={this.state.photoUrl} />
                        <h2>{this.state.selectedShade.name}</h2>
                    </div>
                    <h1>{this.props.product.name}</h1>
                </Link>
                
                <p>${this.props.product.price}.00</p>

                <div className="shades-carousel">
                    {this.props.productShades.map((shade) => {
                        let active = ""
                        if (shade.id === this.state.selectedShade.id) {
                            active = "selected"
                        }
                        return (
                            <img className={`carousel-swatch ${active}`} src={shade.swatchPhoto} onClick={() => this.handleShadeClick(shade)} key={shade.id} />
                        )
                    })}
                </div>              

                <button onClick={this.addToCart}>{cartButtonText}</button>

            </div>
        )
    }
}

export default ProductIndexItem