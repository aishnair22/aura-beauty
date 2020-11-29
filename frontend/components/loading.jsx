import React from 'react'

class LoadingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="loading-page" style={{display: this.props.style}}>
                <img src={window.loading} alt="loading-icon"/>
            </div>
        )
    }
}

export default LoadingPage