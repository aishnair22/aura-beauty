import React from 'react'
import { Link } from 'react-router-dom'

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { photoUrl: "", selectedShadeName: ""}
        this.handleShadeClick = this.handleShadeClick.bind(this)
    }
    
    handleShadeClick(shade) {
        this.setState({ photoUrl: shade.productPhoto, selectedShadeName: shade.name})
    }

    componentDidMount() {
        if (!this.props.productShades.length) {
            this.setState({photoUrl: this.props.product.photoUrls[0]})
        } else {
            this.setState({ photoUrl: this.props.productShades[0].productPhoto, selectedShadeName: this.props.productShades[0].name})
        }
    }
    
    render() {

        return (
            <div className="product-index-item">
                <Link to={`/products/${this.props.product.name}-${this.props.product.id}`}>
                    <div className="index-item-img-caption">
                        <img className="index-item-product-img" src={this.state.photoUrl} />
                        <h2>{this.state.selectedShadeName}</h2>
                    </div>
                    <h1>{this.props.product.name}</h1>
                </Link>
                
                <p>${this.props.product.price}.00</p>

                <div className="shades-carousel">
                    {this.props.productShades.map((shade) => {
                        let active = ""
                        if (shade.name === this.state.selectedShadeName) {
                            active = "selected"
                        }
                        return (
                            <img className={`carousel-swatch ${active}`} src={shade.swatchPhoto} onClick={() => this.handleShadeClick(shade)} key={shade.id} />
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