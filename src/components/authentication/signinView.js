import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class SignIn extends Component {



    handleFormSubmit({ email, password }){


        //  need to log the user in
        this.props.signinUser({ email, password })
    }

    renderAlert(){
        if(this.props.errorMessage){
            return (
                <div className='alert alert-danger'>
                    <strong>Oops!</strong> { this.props.errorMessage}
                </div>
            )
        }
    }



    render() {


        //  these are all properties that come from redux form
        const { handleSubmit, fields: { email, password }} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <input {...email } className='form-control' />
                </fieldset>

                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input {...password } className='form-control' type='password' />
                </fieldset>

                { this.renderAlert() }

                <button action='submit' className='btn btn-primary'>Sign in</button>

            </form>
        )

    }

}


function mapStateToProps(state){
    return { errorMessage: state.auth.error }
}



//function mapDispatchToProps(dispatch){
//    return bindActionCreators({ fetchPosts }, dispatch);
//}
//export default connect(null, mapDispatchToProps)(SignIn)


//  a shortcut in contrast to the above code for wiring up the fetchPosts action creator to this container
//export default connect(null, { fetchPosts: fetchPosts })(SignIn)


//  1st parameter is options, 2nd is state coming into this component, 3rd parameter is the actions for action creators (being triggered from this component)
export default reduxForm({
    form: 'signin', //  the name of the form
    fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn)

