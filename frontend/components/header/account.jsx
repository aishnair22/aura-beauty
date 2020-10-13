import React from 'react'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
        .then(() => this.props.history.push("/"))
    }

    render() {
        const account = this.props.currentUser ? (
            <div>
                <h1>My Account</h1>
                <div className="account-sidebar">
                    {/* button that will have text "My Info" that will load on the main */}
                    <button onClick={this.handleSubmit}>Log Out</button>
                </div>
                <div className="account-main">
                    <h1>My Info</h1>
                    <h3>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                    <h3>{this.props.currentUser.email}</h3>
                </div>
            </div>
        ) : (
            null
        )
        return(
            <div>
                {account}
            </div>
        )
    }
}

export default Account