import React from 'react';
import {LoginFormRedux} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit_ = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit_} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});
export default connect(mapDispatchToProps, {login, logout})(Login);