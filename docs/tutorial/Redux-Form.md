To connect your React form components to your Redux store you'll need the following pieces 
from the `redux-form` package:
- Redux Reducer: formReducer,
- React HOC reduxForm() and <Field/> component.

- **formReducer** - reducer	function that tells how to update the Redux store based on changes coming 
    from the application; those changes are described by Redux actions.
- **reduxForm()	HOC** - function that takes configuration object and returns a new function; use it to wrap your 
    form component and bind user interaction to dispatch of Redux actions.
- **<Field/>	component** - component that lives inside your wrapped form component; 
    use it to connect the input components to the redux-form logic
`npm i redux-form`    
`import {reducer as formReducer} from "redux-form";`

- Componenta Field functioneaza doar in interiorul la reduxForm().

- handleSubmit - preia datele din reduxForm si le pune intr-un obiect.

```js
import {Field, reduxForm, reset} from "redux-form";

const Form = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name='messageBody' placeholder='Enter your message' />
        <Field component="input" name="login" placeholder="Login"  />
        <Field component="input" type="checkbox" name="rememberMe" />
    </form>
)};

const emptyFields = (result, dispatch) => dispatch(reset('myForm'));

const FormRedux = reduxForm({form: 'myForm', onSubmitSuccess: emptyFields})(Form);

let showMessage = (values) => { alert(values.messageBody) };
<FormRedux onSubmit={showMessage} />
```
