import React from "react"
import {Link} from 'react-router-dom'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="splash">
                <div className="splash-first-component">
                    <h1>Shop By Category</h1>

                    <div className="splash-links">
                        <Link to="/collections/face" className="splash-link" >Face
                            <img className="splash-img-tall" src={window.splash_face} />
                        </Link>
                        <Link to="/collections/lip" className="splash-link" >Lip
                            <img className="splash-img-wide" src={window.splash_lip} />
                        </Link>
                        <Link to="/collections/eye" className="splash-link" >Eye
                            <img className="splash-img-tall" src={window.splash_eye} />
                        </Link>
                    </div>
                </div>

                <div className="splash-second-component">
                    <h1>FOUNDER QUOTE</h1>
                    <h2 className="quote">
                        “Being rare is about being comfortable with yourself. I’ve stopped trying to be perfect. I just want to be me.”
                    </h2>
                    <h1>SELENA GOMEZ</h1>
                </div>

            </div>
        )
    }
}

export default Splash