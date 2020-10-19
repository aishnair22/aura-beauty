import React from 'react'

class ProductIndexItem extends React.Component {
    constructor(props) {
        // use fetchProduct in product show link
        super(props)
        this.state = { photoUrl: "", selectedShadeName: "" }
        this.handleShadeClick = this.handleShadeClick.bind(this)
    }

    handleShadeClick(shade) {
        this.setState({ photoUrl: shade.productPhoto, selectedShadeName: shade.name })
    }

    render() {
        let image
        if (this.props.productShades.length === 0) {
            image = <img className="index-item-product-img" src={this.props.product.photoUrls[0]} />
        } else {
            image = <img className="index-item-product-img" src={this.props.productShades[0].productPhoto} />
            // this.setState({ selectedShadeName: this.props.productShades[0].name})
            // ^^ makes it really slow on initial load
        }

        return (
            <div className="product-index-item">
                <div className="index-item-img-caption">
                    {/* sets initial image: */}
                    {image}
                    {/* sets image as we change the shade we click on */}
                    {/* <img className="index-item-product-img" src={this.state.photoUrl} /> */}
                    <h2>{this.state.selectedShadeName}</h2>
                </div>

                <h1>{this.props.product.name}</h1>
                <p>${this.props.product.price}.00</p>

                <div className="shades-carousel">
                    {this.props.productShades.map((shade) => {
                        return (
                            <img className="carousel-swatch" src={shade.swatchPhoto} onClick={() => this.handleShadeClick(shade)} key={shade.id} />
                        )
                    })}
                </div>

                <button>ADD TO BAG</button>
                {/* add an onclick to add to cart */}
            </div>
        )
    }
}

export default ProductIndexItem