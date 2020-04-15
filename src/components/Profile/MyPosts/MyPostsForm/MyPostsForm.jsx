import {Field, reduxForm, reset} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../../utils/validators/validators";
import {FormControl} from "../../../common/FormControls/FormControls";

const maxLength25 = maxLength(25);
const emptyFields = (result, dispatch) => dispatch(reset('myPost'));

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl}
                       typefield='textarea'
                       name='messageBody'
                       validate={[required, maxLength25]}
                       placeholder='Type here ..'/>
            </div>
            <div>
                <button> Add Post</button>
            </div>
        </form>
    )
};

export const MyPostsFormRedux = reduxForm({form: 'myPost', onSubmitSuccess: emptyFields})(MyPostsForm);
