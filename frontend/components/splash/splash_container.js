import Splash from './splash';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions'

const mSTP = (state) => {
    return({
        currentUser: state.session.currentUser
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchCategories: () => dispatch(fetchCategories())
    })
}


export default connect(mSTP, mDTP)(Splash);