import React from 'react';
import { Link } from "react-router-dom"
import ProductIndexItem from "../product/product_index_item";
import CartNumber from "../cart/cart_number"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.rerenderParent = this.rerenderParent.bind(this)
    }

    componentWillUpdate() {
        this.props.queryProducts(this.props.match.params.query)
    }
    
    componentDidMount() {
        this.props.queryProducts(this.props.match.params.query)
        this.props.fetchAllShades()
    }

    rerenderParent() {
        this.forceUpdate();
    }

    render() {

        if (this.props.products.length) {
            return (
                <div className="product-index-content">
                    <h6 className="top-results">Here are the top results for your search:</h6>

                    <div className="all-index-items">
                        {this.props.products.map((product) => {
                            const productShades = this.props.shades.filter((shade) => {
                                return (shade.product_id === product.id)
                            })

                            return <ProductIndexItem
                                key={product.id}
                                product={product}
                                productShades={productShades}
                                cartItems={this.props.cartItems}
                                currentUser={this.props.currentUser}
                                currentCart={this.props.currentCart}
                                createCartItem={this.props.createCartItem}
                                updateCartItem={this.props.updateCartItem}
                                rerenderParent={this.rerenderParent}
                            />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="search-page">
                    <CartNumber />
                    <h5>Oops! No results found.</h5>
                    <Link to="/collections/all" className="search-shop-all">CONTINUE SHOPPING <i className="arrow-right"></i></Link>
                </div>
            )
        }
    }

}

export default Search