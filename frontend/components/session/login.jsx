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

    render() {
        return (
            <div className="session-form">
                <h2>Log In!</h2>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login