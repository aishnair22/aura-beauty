import React from "react"

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <h2>I'm sorry, the page you're looking for does not exist :(</h2>
            <img src={window.sadFace} />
        </div>
    )
}

export default NotFoundPage;
