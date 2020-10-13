import React from "react"

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
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
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push("/")) //frontend route for user's profile
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')} />
                    </label>
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup