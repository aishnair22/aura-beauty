import React from 'react'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { currentShadeName: "current shade" }
        this.handleShadeClick = this.handleShadeClick.bind(this)
    }

    handleShadeClick(shade) {
        this.setState({ currentShadeName: shade.name })
    }

    componentDidMount() {
        this.props.fetchAllShades()
        this.props.fetchCategories()
        this.props.fetchProduct(this.props.productId)

        if (this.props.shades.length) {
            this.setState({ currentShadeName: this.props.shades[0].name })
            //  photoUrl: this.props.shades[0].productPhoto,
        } else {
            // this.setState({ photoUrl: this.props.product.photoUrls[0] })
        }
    }

    render() {
        if (!this.props.product && !this.props.shades.length) {
            return null
        }

        const { product, shades} = this.props

        let shadeNameDisplay
        if (this.props.shades.length) {
            shadeNameDisplay = <h2>No. {this.state.currentShadeName}</h2>
        }

        return(
            <div className="product-show">
                <h1>{product.name}</h1>
                {shadeNameDisplay}
                <h3>{product.description}</h3>

                <h2>all shades:</h2>
                {shades.map((shade) => {
                    return (
                        <div key={shade.id}>
                            <h1>{shade.name}</h1>
                            <img onClick={() => this.handleShadeClick(shade)} src={shade.swatchPhoto} height="60px" width="50px"/>
                        </div>
                    )
                })}


                {/* {this.props.product.photoUrls.map((photoUrl) => {                    
                    return <img src={photoUrl} />
                })} */}
                {/* <img src={shade.swatchPhoto} />
                <img src={shade.productPhoto} /> */}
                {/* <img src={this.props.product.detailsPhoto} />
                <img src={this.props.product.howToUsePhoto} /> */}
            </div>
        )
    }
}

export default ProductShow