import {reduxForm} from "redux-form";
import React from "react";
import {createField} from "../../common/FormControls/FormControls";
import {minLength, required} from "../../../utils/validators/validators";

const minLength6 = minLength(6);

const LoginForm = ({handleSubmit, error}) => {
    // handleSubmit - preia datele din <form> si le pune intr-un obiect
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "input", null, 'Login', [required])}
            {createField("password", "input", 'password', 'Password', [required, minLength6])}
            {createField("rememberMe", "input", 'checkbox', null, null, 'Remember me')}

            {error && <div style={{color: 'red'}}>{error}</div>}
            <div>   <button> Login </button>   </div>
        </form>
    )
};

export const LoginFormRedux = reduxForm({form: 'login' /*unique name for the form*/})(LoginForm);
// reduxForm transmite o multime de functii ca props, care pot fi folosite
