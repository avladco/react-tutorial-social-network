import {Field, reduxForm, reset} from "redux-form";
import React from "react";
import {FormControl} from "../../common/FormControls/FormControls";
import {maxLength} from "../../../utils/validators/validators";

const maxLength50 = maxLength(50);
const emptyFields = (result, dispatch) => dispatch(reset('dialogsAddMessage'));

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={FormControl}
                   typefield='textarea'
                   name='messageBody'
                   validate={[maxLength50]}
                   placeholder='Type here ..' />
        </div>
        <div>
            <button> Send Message</button>
        </div>
    </form>
};

export const AddMessageFormRedux = reduxForm({form:'dialogsAddMessage', onSubmitSuccess:emptyFields})(AddMessageForm);
