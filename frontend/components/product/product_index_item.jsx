import React from 'react'

class ProductIndexItem extends React.Component {
    constructor(props) {
        // use fetchProduct in product show link
        super(props)
        this.state = { photoUrl: "", selectedShade: true }
        this.handleShadeClick = this.handleShadeClick.bind(this)
    }

    handleShadeClick(shade) {
        this.setState({ photoUrl: shade.productPhoto, selectedShade: shade })
    }

    render() {
        // if (!this.props.productShades) {
        //     debugger
        //     // this.setState({ photoUrl: this.props.product.photoUrls[0] })
        // } 
        // else {
        //     debugger
        //     // this.setState({ photoUrl: this.props.productShades[0].productPhoto }) // first photo of first shade            
        // }

        return (
            <div>
                <br/>
                <img src={this.state.photoUrl} height="50px" width="30px"/>
                <h2>{this.state.selectedShade.name}</h2>

                <p>{this.props.product.name}</p>
                <p>${this.props.product.price}.00</p>

                <p>shades carousel:</p>
                {this.props.productShades.map((shade) => {
                    return (
                        <div>
                            <img src={shade.swatchPhoto} onClick={() => this.handleShadeClick(shade)} key={shade.id} height="100px" width="60px"/>
                        </div>
                    )
                })}

                <button>ADD TO BAG</button>
                {/* add an onclick to add to cart */}
            </div>
        )
    }
}

export default ProductIndexItem