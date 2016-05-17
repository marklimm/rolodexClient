import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'


class RegisterView extends Component {


    handleFormSubmit(formProps) {
        //console.log(formProps.email, formProps.password)

        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    <strong>Oops!</strong> { this.props.errorMessage}
                </div>
            )
        }
    }


    render() {

        //  these are all properties that come from redux form
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

        return (

            <div className='userForm'>

                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className='form-group'>
                        <label>Email:</label>
                        <input {...email } className='form-control'/>

                        { email.touched && email.error && <div className='error'>{ email.error }</div> }

                    </fieldset>

                    <fieldset className='form-group'>
                        <label>Password:</label>
                        <input {...password } className='form-control' type='password'/>
                        { password.touched && password.error && <div className='error'>{ password.error }</div> }
                    </fieldset>

                    <fieldset className='form-group'>
                        <label>Confirm Password:</label>
                        <input {...passwordConfirm } className='form-control' type='password'/>

                        { passwordConfirm.touched && passwordConfirm.error &&
                        <div className='error'>{ passwordConfirm.error }</div> }
                    </fieldset>

                    { this.renderAlert() }

                    <button action='submit' className='btn btn-primary'>Sign up</button>

                </form>
            </div>
        )
    }

}


function validate(formProps) {
    //  our validation function that we pass to reduxForm

    const errors = {};

    //console.log(formProps)


    if (!formProps.email) {
        errors.email = 'Please enter an email'
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password'
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation'
    }

    if (formProps.password !== formProps.passwordConfirm) {

        //  this statement adds the string value to password.error, which we'll render to the UI
        errors.password = 'Passwords must match'
    }

    //  always return the errors object
    return errors;
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error}
}

//  1st parameter is options, 2nd is state coming into this component, 3rd parameter is the actions for action creators (being triggered from this component)
export default reduxForm({
    form: 'register', //  the name of the form
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(RegisterView)

