import React from "react"
import {Link} from 'react-router-dom'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.handleFoundation = this.handleFoundation.bind(this)
    }

    handleFoundation(e) {
        e.preventDefault()
        this.props.history.push("/products/Liquid%20Touch%20Weightless%20Foundation~1")
    }

    render() {
        return(
            <div className="splash">
                <div className="splash-first-component">
                    <img src={window.splash_foundation} />
                    <div className="blot">
                        <h1>Liquid Touch</h1>
                        <h1>Weightless</h1>
                        <h1>Foundation</h1>
                        <p>Breathable, medium to full coverage that melts into skin to look and feel like you.</p>
                        <button onClick={this.handleFoundation}>SHOP NOW</button>
                    </div>
                </div>
                
                <div className="splash-second-component">
                    <h1>Shop By Category</h1>

                    <div className="splash-links">
                        <Link to="/collections/lip" className="splash-link  link-lip" >
                            <h5>Lip</h5>
                            <img className="splash-img" src={window.splash_lip} />
                        </Link>
                        <Link to="/collections/eye" className="splash-link  link-eye" >
                            <h5>Eye</h5>
                            <img className="splash-img" src={window.splash_eye} />
                        </Link>
                        <Link to="/collections/face" className="splash-link link-face" >
                            <h5>Face</h5>
                            <img className="splash-img" src={window.splash_face} />
                        </Link>
                    </div>
                </div>

                <div className="splash-third-component">
                    <img src={window.splash_rare} />
                    <div className="rare">
                        <h1>What makes us Rare</h1>
                        <p>We empower our Rare Beauty community to challenge beauty norms by shaping positive conversations about self-acceptance and mental health. Together we're building a safe, welcoming space in beauty and beyond.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Splash