import { connect } from "react-redux"
import { createNewUser } from '../../actions/session'
import Signup from './signup'

//no mapStateToProps bc we don't need access to any part of state in our Signup Component

const mapDispatchToProps = (dispatch) => {
    return ({
        createNewUser: (formUser) => dispatch(createNewUser(formUser))
    })
}

export default connect(null, mapDispatchToProps)(Signup)