import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="footer">
                <div className="footer-shop">
                    <h1>SHOP</h1>
                    <Link className="footer-link" to="/collections/all">ALL</Link>
                    <Link className="footer-link" to="/collections/face">FACE</Link>
                    <Link className="footer-link" to="/collections/eye">EYE</Link>
                    <Link className="footer-link" to="/collections/lip">LIP</Link>
                    <Link className="footer-link"to="/collections/tools">TOOLS</Link>
                </div>

                <div className="footer-bottom">
                    <p>© 2020 Aura Beauty</p>
                    <p>all rights reserved</p>            
                </div>
            </div>
        )
    }
}

export default Footer