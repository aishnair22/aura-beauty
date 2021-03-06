import React from "react"
import CartNumber from '../cart/cart_number'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this);
        this.signupButton = this.signupButton.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
        .then(() => this.props.history.push("/account"))
    }

    signupButton(e) {
        e.preventDefault()
        this.props.history.push("/signup")
    }

    loginDemoUser(e) {
        this.props.clearErrors()
        e.preventDefault()
        this.setState({
            email: "demouser@aurabeauty.com",
            password: "123456"
        }, () => this.props.login(this.state)
        .then(() => this.props.history.push("/account")))
    }

    renderErrors() {
        if (!this.props.errors) {
            return null
        } else {
            return (
                <ul className="errors">
                    {this.props.errors.map((error, idx) => {
                        return <li className="error-login" key={idx} >{error}</li>
                    })}
                </ul>
            )
        }
    }
    

    render() {
        let cartNumber
        if (!this.props.currentUser) {
            cartNumber = <CartNumber />
        }
        
        return (
            <div className="login">
                {cartNumber}

                <div className="login-side">
                    <h2>Sign In</h2>
                    <div>{this.renderErrors()}</div>
                    <form className="form">
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange('email')} />
                        <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')} />
                        <button onClick={this.handleSubmit}>SIGN IN</button>

                        <button onClick={this.loginDemoUser}>DEMO USER</button>
                    </form>
                </div>
                <div className="vertical-line"></div>
                <div className="signup-side">
                    <h2>New Account</h2>
                    <button onClick={this.signupButton}>CREATE ACCOUNT</button>
                </div>
            </div>
        )
    }
}

export default Login