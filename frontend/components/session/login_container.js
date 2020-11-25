import { connect } from "react-redux"
import { login, clearErrors } from '../../actions/session_actions'
import Login from './login'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentCart: state.session.currentCart
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (formUser) => dispatch(login(formUser)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)