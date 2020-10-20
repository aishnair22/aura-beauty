import React from 'react'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { photoUrl: "" }
        this.handleShadeClick = this.handleShadeClick.bind(this)
        this.handlePhotoClick = this.handlePhotoClick.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchProduct(this.props.productId)
        this.props.fetchAllShades()
    }

    handleShadeClick(shade) {
        this.setState({ currentShade: shade, currentShadeName: shade.name })
    }

    handlePhotoClick(photoUrl) {
        this.setState({ photoUrl: photoUrl })
    }


    render() {
        if (!this.props.product && !this.props.shades.length) {
            return null
        }

        const { product, shades } = this.props

        let shadeNameDisplay
        if (this.props.shades.length) {
            shadeNameDisplay = <h2>No. {this.state.currentShadeName}</h2>
        }

        return(
            <div className="product-show">
                <div className="product-side-info">
                    <div>
                        <h1>{product.name}</h1>
                        {shadeNameDisplay}
                        <h3>{product.description}</h3>

                        {shades.map((shade) => {
                            return (
                                <div key={shade.id}>
                                    <img onClick={() => this.handleShadeClick(shade)} src={shade.swatchPhoto} height="60px" width="50px"/>
                                </div>
                            )
                        })}

                        <button>ADD TO CART • ${product.price}</button>
                    </div>

                    <img className="selected-product-photo" src={this.state.photoUrl} />
                    
                    <div className="all-product-photos">
                        {/* <img className="dot" src={this.state.currentShade.productPhoto} /> */}
                        {this.props.product.photoUrls.map((photoUrl) => {                    
                            return <img className="dot" onClick={() => this.handlePhotoClick(photoUrl)} src={photoUrl} />
                        })}
                        {/* <img className="dot" src={this.state.currentShade.swatchPhoto} /> */}

                    </div>
                </div>

                <div>
                    <div className="product-details">
                        <img src={this.props.product.detailsPhoto} height="100px" width="100px"/>
                        <h1>Details</h1>
                        <p>{product.details}</p>
                    </div>

                    <div className="product-ingredients-how-to">
                        <h1>What's in it?</h1>
                        <p>{product.ingredients}</p>

                        <img src={this.props.product.howToUsePhoto} height="100px" width="100px"/>

                        <h1>How to use</h1>
                        <p>{product.how_to_use}</p>
                    </div>

                    <div className="product-quote">
                        <h1>WHY SELENA LOVES IT</h1>
                        <p>"{product.quote}"</p>
                        <h1>SELENA GOMEZ</h1>
                    </div>
                </div>

                {/* Reviews */}

            </div>
        )
    }
}

export default ProductShow