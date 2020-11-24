import React from 'react'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentShade: "", 
            photoUrl: "", 
            howToOpen: "", 
            ingredientsOpen: "",
            disabled: ""
        }
        this.handleShadeClick = this.handleShadeClick.bind(this)
        this.handlePhotoClick = this.handlePhotoClick.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchProduct(this.props.productId)
        this.props.fetchAllShades()
        this.props.fetchAllCartItems()
    }
    
    componentWillReceiveProps(nextProps, prevState) {
        if (!nextProps.shades.length && nextProps.product) {
            this.setState({ photoUrl: nextProps.product.photoUrls[0] })
        } else if (nextProps.shades.length) {
            this.setState({ photoUrl: nextProps.shades[0].productPhoto, currentShade: nextProps.shades[0] })
        }
    }

    handleShadeClick(shade) {
        this.setState({ currentShade: shade, photoUrl: shade.productPhoto })
    }

    handlePhotoClick(photoUrl) {
        this.setState({ photoUrl: photoUrl })
    }

    openModal(type) {
        if (type === "ingredients") {
            this.setState({ ingredientsOpen: "is-open"})
        } else {
            this.setState({ howToOpen: "is-open"})
        }
    }

    closeModal(type) {
        if (type === "ingredients") {
            this.setState({ ingredientsOpen: "" })
        } else {
            this.setState({ howToOpen: "" })
        }
    }

    addToCart() {
        this.setState({ disabled: "disabled"})
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
                let currentProduct = this.props.product
                let matchingCartItem = this.props.cartItems.filter((itemObj) => {
                    if (itemObj.shade) {
                        return (itemObj.product.id === currentProduct.id && itemObj.shade.id === this.state.currentShade.id)
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
                    if (this.state.currentShade) {
                        newItem.shade_id = this.state.currentShade.id
                    }
                    this.props.createCartItem(newItem)
                }
            }
        }

    }   

    render() {
        if (!this.props.product) {
            return null
        }
        const { product, shades } = this.props

        let shadeNameDisplay
        let shadeImageOne
        let shadeImageTwo
        let shadeUnderline

        let selected_one = ""
        if (this.state.photoUrl === this.state.currentShade.productPhoto) {
            selected_one = "selected"
        } 

        let selected_two = ""
        if (this.state.photoUrl === this.state.currentShade.swatchPhoto) {
            selected_two = "selected"
        } 

        if (this.props.shades.length) {
            shadeNameDisplay = (
                <div className="product-shade-name">
                    <h4>No.</h4>   
                    <h5>{this.state.currentShade.name}</h5>  
                </div>
            )
            shadeImageOne = <img className={selected_one} onClick={() => this.handlePhotoClick(this.state.currentShade.productPhoto)} src={this.state.currentShade.productPhoto} />
            shadeImageTwo = <img className={selected_two} onClick={() => this.handlePhotoClick(this.state.currentShade.swatchPhoto)} src={this.state.currentShade.swatchPhoto} />
            shadeUnderline = <div className="product-name-underline"></div>
        }

        let ingredients

        if (this.props.product.ingredients !== "N/A") {
            ingredients = (
                <div className="ingredients">
                    <h1>What's in it?</h1>
                    <p>{product.ingredients.slice(0, 100)} ...</p>
                    <span onClick={() => this.openModal("ingredients")}>MORE</span>

                    <div className={`modal ${this.state.ingredientsOpen}`}>
                        <div className={`modal-details`}>
                            <div onClick={() => this.closeModal("ingredients")} className="modal-close">&times;</div>
                            <h5>Full Ingredients</h5>
                            <h6>{product.ingredients}</h6>
                        </div>
                        <div className="modal-screen"></div>
                    </div>
                </div>
            )
        }

        let cartButtonText
        if (this.state.disabled) {
            cartButtonText = "ADDED TO BAG!"
        } else {
            cartButtonText = `ADD TO BAG • ${ product.price }`
        }

        return(
            <div className="product-show">
                <div className="product-first-component">
                    <div className="product-side-info">
                        <h1>{product.name}</h1>
                        {shadeNameDisplay}
                        {shadeUnderline}

                        <h3>{product.description}</h3>

                        <div className="product-swatches-all-images">
                            {shades.map((shade, idx) => {
                                let active = ""
                                if (shade === this.state.currentShade) {
                                    active = "selected"
                                }
                                return <img key={idx} className={active} onClick={() => this.handleShadeClick(shade)} src={shade.swatchPhoto} />
                            })}
                        </div>
                        <button className="cart-button" onClick={this.addToCart} >{cartButtonText}</button>
                    </div>

                    <div className="product-show-img-and-captions">
                        <img className="selected-product-photo" src={this.state.photoUrl} />

                        <div className="all-product-photos">
                            {shadeImageOne}
                            {this.props.product.photoUrls.map((photoUrl, idx) => {
                                let active = ""
                                if (photoUrl === this.state.photoUrl) {
                                    active = "selected"
                                }              
                                return <img className={active} onClick={() => this.handlePhotoClick(photoUrl)} src={photoUrl} key={idx}/>
                            })}
                            {shadeImageTwo}
                        </div>
                    </div>
                </div>

                <div className="product-second-component">
                    <div className="product-details">
                        <img src={this.props.product.detailsPhoto} />
                        
                        <div className="details">
                            <h1>Details</h1>
                            <p>{product.details}</p>               
                        </div>
                    </div>

                    <div className="product-ingredients-how-to">
                        {ingredients}

                        <img src={this.props.product.howToUsePhoto} />

                        <div className="how-to">
                            <h1>How to use</h1>
                            <p>{product.how_to_use.slice(0, 100)} ...</p>
                            <span onClick={() => this.openModal("how-to")}>MORE</span>

                            <div className={`modal ${this.state.howToOpen}`}>
                                <div className={`modal-details`}>
                                    <div onClick={() => this.closeModal("how-to")} className="modal-close">&times;</div>
                                    <h5>Usage</h5>
                                    <h6>{product.how_to_use}</h6>
                                </div>
                                <div className="modal-screen"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-quote-component">
                    <h1>WHY SELENA LOVES IT</h1>
                    <p className="quote">"{product.quote}"</p>
                    <h1>SELENA GOMEZ</h1>
                </div>

                {/* Reviews */}

            </div>
        )
    }
}

export default ProductShow