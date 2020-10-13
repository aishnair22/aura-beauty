import React from "react"

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
        .then(() => this.props.history.push("/")) //change this to the frontend route for user's profile
    }

    loginDemoUser(e) {
        e.preventDefault()
        this.setState({
            email: "DemoUser",
            password: "123456"
        }, () => this.props.login(this.state)
        .then(() => this.props.history.push("/")))
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
            <div className="session-form">
                <h2>Log In!</h2>
                <div>{this.renderErrors()}</div>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>

                    <button onClick={this.loginDemoUser}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default Login