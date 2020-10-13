import { connect } from "react-redux"
import { login } from '../../actions/session'
import Login from './login'

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (formUser) => dispatch(login(formUser))
    })
}

export default connect(null, mapDispatchToProps)(Login)