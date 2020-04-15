import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {compose} from "redux";
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps, {logout}),
    withRouter
)(HeaderContainer);