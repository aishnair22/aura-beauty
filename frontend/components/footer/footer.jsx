import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="footer">
                <div className="footer-about-me">
                    <div className="footer-name">
                        by Aishwarya Nair
                    </div>
                    <a className="footer-link" href="https://github.com/aishnair22/" target="_blank">GITHUB</a>
                    <a className="footer-link" href="https://www.linkedin.com/in/aishwarya-nair22/" target="_blank">LINKEDIN</a>
                </div>
                <div className="footer-logo">
                    <h1>Aura Beauty</h1>
                    <p>clone of Rare Beauty</p>
                </div>
            </div>
        )
    }
}

export default Footer