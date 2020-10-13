import React from "react"
import {Link} from "react-router-dom"

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
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push("/account")) //frontend route for user's profile
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
                <h2>Create an Account</h2>
                <div>{this.renderErrors()}</div>
                <form>
                    <input type="text" value={this.state.first_name} placeholder="First Name" onChange={this.handleChange('first_name')} />
                    <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.handleChange('last_name')} />
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange('email')} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange('password')} />
                    <button onClick={this.handleSubmit}>Register</button>
                    <Link to="/login">Already have an account? Login here.</Link>
                </form>
            </div>
        )
    }
}

export default Signup