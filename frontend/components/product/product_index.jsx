import React from 'react'
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleCategory = this.handleCategory.bind(this)
        const urlCategory = this.props.match.url.split("/")
        this.state = { selectedCategory: urlCategory[urlCategory.length - 1]}
    
        if (this.state.selectedCategory === "all") {
            this.state.all = "selected"
        } else if (this.state.selectedCategory === "face") {
            this.state.face = "selected"
        } else if (this.state.selectedCategory === "eye") {
            this.state.eye = "selected"
        } else if (this.state.selectedCategory === "lip") {
            this.state.lip = "selected"
        } else if (this.state.selectedCategory === "tools") {
            this.state.tools = "selected"
        } 
    }
    
    handleCategory(type) {
        event.preventDefault()
        new Promise(() => this.props.history.push(`/collections/${type}`))
  
    }

    componentDidMount() {
        // Promise.all([
        this.props.fetchAllProducts()
        this.props.fetchCategories()
        this.props.fetchAllShades()
        // ])
    }

    render() {
        if (!this.props.products.length || !this.props.shades.length) {
            return null
        }

        return(
            <div className="product-index">
                <div className="product-index-content">
                    <h1>{this.props.categoryName}</h1>
                    <h2>CATEGORIES</h2>
                    <button className={this.state.all} onClick={() => this.handleCategory("all")}>All</button>
                    <button className={this.state.face} onClick={() => this.handleCategory("face")}>Face</button>
                    <button className={this.state.lip} onClick={() => this.handleCategory("lip")}>Lip</button>
                    <button className={this.state.eye} onClick={() => this.handleCategory("eye")}>Eye</button>
                    <button className={this.state.tools} onClick={() => this.handleCategory("tools")}>Tools</button>

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