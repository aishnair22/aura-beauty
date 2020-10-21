import React from 'react'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleShadeClick = this.handleShadeClick.bind(this)
        this.handlePhotoClick = this.handlePhotoClick.bind(this)
        this.state = {currentShade: "", photoUrl: ""}
    }

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchProduct(this.props.productId)
        this.props.fetchAllShades()
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

        return(
            <div className="product-show">
                <div className="product-first-component">
                    <div className="product-side-info">
                        <h1>{product.name}</h1>
                        {shadeNameDisplay}
                        {shadeUnderline}

                        <h3>{product.description}</h3>

                        <div className="product-swatches-all-images">
                            {shades.map((shade) => {
                                let active = ""
                                if (shade === this.state.currentShade) {
                                    active = "selected"
                                }
                                return <img className={active} onClick={() => this.handleShadeClick(shade)} src={shade.swatchPhoto} />
                            })}
                        </div>
                        <button>ADD TO CART • ${product.price}</button>
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
                        <div className="ingredients">
                            <h1>What's in it?</h1>
                            <p>{product.ingredients}</p>
                        </div>

                        <img src={this.props.product.howToUsePhoto} />

                        <div className="how-to">
                            <h1>How to use</h1>
                            <p>{product.how_to_use}</p>
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