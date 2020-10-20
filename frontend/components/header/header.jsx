import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleAccount = this.handleAccount.bind(this)
        this.handleLogo = this.handleLogo.bind(this)
    }

    handleAccount(e) {
        e.preventDefault()
        this.props.currentUser ? (
            this.props.history.push("/account")
        ) : (
            this.props.history.push("/login")
        )
    }

    handleLogo(e) {
        e.preventDefault()
        this.props.history.push("/")
    }

    render() {
    
        return (
            <header className="header">
                <div className="dropdown">
                    <Link to="/" className="dropdown-shop">SHOP</Link>
                    <div className="dropdown-content">
                        <Link to="/collections/all" className="dropdown-links" >Shop All                   
                            <img className="downdown-img" src={window.shopAll } />
                        </Link>
                        <Link to="/collections/face" className="dropdown-links" >Face
                            <img className="downdown-img" src={window.face } />                       
                        </Link>
                        <Link to="/collections/eye" className="dropdown-links" >Eye
                            <img className="downdown-img" src={window.eye } />                       
                        </Link>
                        <Link to="/collections/lip" className="dropdown-links" >Lip
                            <img className="downdown-img" src={window.lip } />
                        </Link>
                        <Link to="/collections/tools" className="dropdown-links" >Tools
                            <img className="downdown-img" src={window.tools } />
                        </Link>
                    </div>
                </div>
                <h1 className="logo" onClick={this.handleLogo}>Aura Beauty</h1>
                <img onClick={this.handleAccount} src={window.accountIcon} /> 
                {/* access to window.accountIcon in application.html.erb */}
            </header>
        );
    }
} 




export default Header