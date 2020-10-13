import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

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
            <header>
                <h1 onClick={this.handleLogo}>Aura Beauty</h1>
                <img onClick={this.handleAccount} src={window.accountIcon} width="25" height="25"/> 
                {/* access to window.accountIcon in application.html.erb */}
            </header>
        );
    }
} 




export default Header