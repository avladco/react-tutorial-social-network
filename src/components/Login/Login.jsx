import React from 'react';
import {LoginFormRedux} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit_ = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit_}/>
    </div>
};

const mapDispatchToProps = (state) => ({
isAuth: state.auth.isAuth
});
export default connect(mapDispatchToProps, {login, logout}) (Login);