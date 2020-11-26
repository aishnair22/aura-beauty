import React from 'react'

class LoadingPage extends React.Component {
    render() {
        return (
            <div className="loading-page">
                <img src={window.loading} alt="loading-icon"/>
            </div>
        )
    }
}

export default LoadingPage