
import React from "react";
import css from './FormControl.module.css'
import {Field} from "redux-form";
/*
type Props = {
    input: string,
    meta: string
}*/

export const FormControl = (props) => {
    // this props come from ReduxForm -> Field Component (smart props)
    // meta props {touched, error, warning}
    const {input, meta: {touched, error}, ...restProps} = props;

    const hasError = touched && error;
    return (
        <div className={hasError ? css.error : ""}>
            <restProps.typefield {...input} {...restProps} />
            {hasError && <span> {error} </span>}
        </div>
    )
};

export const createField = (name, typefield, type = null, placeholder = null, validate = [], text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validate} component={FormControl} typefield={typefield}
               type={type}/> {text}
    </div>
);
