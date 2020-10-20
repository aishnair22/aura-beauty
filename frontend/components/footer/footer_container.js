import { connect } from 'react-redux';
import Footer from './footer';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
