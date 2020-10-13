import React from "react"
import {Link} from "react-router-dom"

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
        e.preventDefault()
        this.setState({
            email: "DemoUser",
            password: "123456"
        }, () => this.props.login(this.state)
        .then(() => this.props.history.push("/account")))
        //setState is asynch, so passed in the login as a cb
    }

    renderErrors() {
        if (!this.props.errors) {
            return null
        } else {
            return (
                <ul>
                    {this.props.errors.map((error, idx) => {
                        return <li key={idx} >{error}</li>
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="login-side">
                    <h2>Log In</h2>
                    <div>{this.renderErrors()}</div>
                    <form>
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange('email')} />
                        <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')} />
                        <button onClick={this.handleSubmit}>Log In</button>

                        <button onClick={this.loginDemoUser}>Demo User</button>
                    </form>
                </div>

                <div>
                    <h2>New Account</h2>
                    <button onClick={this.signupButton}>Create Account</button>
                </div>
            </div>
        )
    }
}

export default Login