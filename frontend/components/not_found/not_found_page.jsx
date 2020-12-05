import React from "react"
import CartNumber from "../cart/cart_number"

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <CartNumber />
            <h2>I'm sorry, the page you're looking for does not exist.</h2>
            <img src={window.sadFace} alt="not-found-image" />
        </div>
    )
}

export default NotFoundPage;
