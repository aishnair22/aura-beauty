import React from 'react'
import CartNumber from '../cart/cart_number'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllCartItems()
        .then(() => {
            const localCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
            const userCartItems = Object.values(this.props.userCartItems)
            if (localCartItems.length) {
                localCartItems.forEach((item) => {
                    let matchingUserItem = userCartItems.filter((userItem) => {                    
                        if (userItem.shade) {
                            return (userItem.product.id === item.product.id && userItem.shade.id === item.shade.id)
                        } else {
                            return (userItem.product.id === item.product.id)
                        }
                    })
    
                    if (matchingUserItem.length) { // we have this item, add one to the quantity
                        let updatedItem = {
                            id: matchingUserItem[0].id,
                            cart_id: this.props.currentCart.id,
                            product_id: matchingUserItem[0].product.id,
                            quantity: matchingUserItem[0].quantity + 1
                        }
                        if (matchingUserItem[0].shade) {
                            updatedItem.shade_id = matchingUserItem[0].shade.id
                        }
                        this.props.updateCartItem(updatedItem)
                    } else { // we don't have this item, create it
                        let newItem = {
                            cart_id: this.props.currentCart.id,
                            product_id: item.product.id,
                            quantity: item.quantity
                        }
                        if (item.shade) {
                            newItem.shade_id = item.shade.id
                        }
                        this.props.createCartItem(newItem)
                    }
        
                })
                localStorage.clear()
            }
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
        .then(() => this.props.history.push("/"))
    }

    render() {
        const account = this.props.currentUser ? (
            <div className="account-all">
                <h1>My Account</h1>
                <div className="account">
                    <div className="account-sidebar">
                        <button className="my-info-btn">My Info</button>
                        <button className="log-out-btn" onClick={this.handleSubmit}>Log Out</button>
                    </div>
                    
                    <div className="account-main">
                        <h2>My Info</h2>
                        <h3>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                        <h3>Email: {this.props.currentUser.email}</h3>
                    </div>
                </div>
            </div>
        ) : (
            null
        )

        let cartNumber
        if (!this.props.currentUser) {
            cartNumber = <CartNumber />
        }

        return(
            <div>
                {cartNumber}
                {account}
            </div>
        )
    }
}

export default Account