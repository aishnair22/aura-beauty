import React from 'react'
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleAllProducts = this.handleAllProducts.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
    }

    handleAllProducts(e) {
        e.preventDefault()
        this.props.history.push(`/collections/shop-all`)
    }

    handleCategory(type) {
        event.preventDefault()
        this.props.history.push(`/collections/${type}`)
    }

    componentDidMount() {
        this.props.fetchAllProducts()
        this.props.fetchCategories()
        this.props.fetchAllShades()
    }

    render() {
        if (!this.props.products) {
            return null
        }
        
        return(
            <div className="product-index">
                <div className="product-index-content">
                    <h1>{this.props.categoryName}</h1>
                    <h2>CATEGORIES</h2>
                    <button onClick={this.handleAllProducts}>All</button>
                    <button onClick={() => this.handleCategory("face")}>Face</button>
                    <button onClick={() => this.handleCategory("lip")}>Lip</button>
                    <button onClick={() => this.handleCategory("eye")}>Eye</button>
                    <button onClick={() => this.handleCategory("tools")}>Tools</button>

                    <ul className="all-index-items">
                        {this.props.products.map(product => {
                            const productShades = this.props.shades.filter((shade) => {
                                return (shade.product_id === product.id)
                            })
                            return <ProductIndexItem key={product.id} product={product} productShades={productShades}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductIndex