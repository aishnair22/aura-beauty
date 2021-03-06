import React from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../loading';
import CartNumber from '../cart/cart_number'

class ProductIndexItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { photoUrl: "", selectedShade: "", disabled: "", loaded: false}
        this.handleShadeClick = this.handleShadeClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
    }
    
    handleLoad() {
        this.setState({loaded: true})
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
            let currentProduct = this.props.product
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
            let matchingItemIndex;
            let matchingStorageItem = cartItems.filter((item, idx) => {
                if (item.shade) {
                    if (item.product.id === currentProduct.id && item.shade.id === this.state.selectedShade.id) {
                        matchingItemIndex = idx
                    }
                    return (item.product.id === currentProduct.id && item.shade.id === this.state.selectedShade.id)
                } else {
                    if (item.product.id === currentProduct.id) {
                        matchingItemIndex = idx
                    }
                    return (item.product.id === currentProduct.id)
                }
            })

            if (matchingStorageItem.length) { // we have this item already, update the quantity
                let updatedItem = {
                    product: currentProduct,
                    quantity: matchingStorageItem[0].quantity + 1
                }
                if (matchingStorageItem[0].shade) {
                    updatedItem.shade = matchingStorageItem[0].shade
                }

                cartItems[matchingItemIndex] = updatedItem

            } else { // we don't have this item, we create it
                let newItem = {
                    product: this.props.product,
                    quantity: 1
                }
                if (this.state.selectedShade) {
                    newItem.shade = this.state.selectedShade
                }
                cartItems.push(newItem)
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            this.props.rerenderParent()
        } else { // we are logged in
            if (this.props.currentCart) { // we have existing cart for this user
                let currentProduct = this.props.product
                let matchingCartItem = this.props.cartItems.filter((itemObj) => {
                    if (itemObj.shade) {
                        return (itemObj.product.id === currentProduct.id && itemObj.shade.id === this.state.selectedShade.id)
                    } else {
                        return (itemObj.product.id === currentProduct.id)
                    }
                })

                if (matchingCartItem[0]) { // we have this item already, update the quantity
                    let updatedItem = {
                        id: matchingCartItem[0].id,
                        cart_id: matchingCartItem[0].cart_id,
                        product_id: currentProduct.id,
                        quantity: matchingCartItem[0].quantity + 1
                    }
                    if (matchingCartItem[0].shade) {
                        updatedItem.shade_id = matchingCartItem[0].shade.id
                    }
                    this.props.updateCartItem(updatedItem)
                } else { // we don't have this item, we create it
                    let newItem = {
                        cart_id: this.props.currentCart.id,
                        product_id: this.props.product.id,
                        quantity: 1
                    }
                    if (this.state.selectedShade) {
                        newItem.shade_id = this.state.selectedShade.id
                    }
                    this.props.createCartItem(newItem)
                }
            }
        }

    }
    
    render() {
        let loadingpagedisplay
        let imagedisplay
        if (this.state.loaded) {
            loadingpagedisplay = "none";
            imagedisplay = "block";
        } else {
            loadingpagedisplay = "block";
            imagedisplay = "none";
        }

        let cartButtonText
        if (this.state.disabled) {
            cartButtonText = "ADDED TO BAG!"
        } else {
            cartButtonText = "ADD TO BAG"
        }

        let cartNumber
        if (!this.props.currentUser) {
            cartNumber = <CartNumber />
        }
     
        return (
            <div className="product-index-item">
                {cartNumber}

                <Link to={`/products/${this.props.product.name}~${this.props.product.id}`}>
                    <div className="index-item-img-caption">
                        <img className="index-item-product-img" src={this.state.photoUrl} alt="product-image" onLoad={this.handleLoad} style={{ display: imagedisplay }}/>
                        <LoadingPage style={loadingpagedisplay} />
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
                            <img className={`carousel-swatch ${active}`} src={shade.swatchPhoto} alt="swatch-image" onClick={() => this.handleShadeClick(shade)} key={shade.id} />
                        )
                    })}
                </div>              

                <button onClick={this.addToCart}>{cartButtonText}</button>

            </div>
        )
        
    }
}

export default ProductIndexItem