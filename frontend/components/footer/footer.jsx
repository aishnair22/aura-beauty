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
                    <a className="footer-link" href="https://github.com/aishnair22/">GITHUB</a>
                    <a className="footer-link" href="https://www.linkedin.com/in/aishwarya-nair22/">LINKEDIN</a>
                </div>
                <div className="footer-logo">
                    <p>Aura Beauty</p>
                </div>
            </div>
        )
    }
}

export default Footer