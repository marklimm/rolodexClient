import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'


class PersonInsertView extends Component {

    componentWillMount() {

    }


    componentDidMount(){
        //  call only on initial render



    }


    componentWillReceiveProps(nextProps) {

        //const { saveStatus } = nextProps;
        //
        //if(saveStatus === 'success') {
        //    // Display a success toast, with a title
        //    toastr.success(nextProps.values.firstName + ' ' + nextProps.values.lastName + ' has been saved', 'Save Completed')
        //
        //
        //
        //}



    }


    componentDidUpdate(prevProps, prevState){
        //  called everytime other than the initial render

    }

    handleFormSubmit(formProps, dispatch) {


        //console.log(formProps.email, formProps.password)

        this.props.insertPerson(formProps, dispatch);
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
        const { handleSubmit, submitting, resetForm, pristine, fields: { firstName, lastName, description }} = this.props;

        return (

            <div >
                <h3>{firstName.value} {lastName.value}</h3>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className='form-group'>
                        <label>First Name:</label>
                        <input {...firstName } className='form-control' placeholder="First Name"
                            />

                        { firstName.touched && firstName.error && <div className='error'>{ firstName.error }</div> }

                    </fieldset>

                    <fieldset className='form-group'>
                        <label>Last Name:</label>
                        <input {...lastName } className='form-control' placeholder="Last Name" />
                        { lastName.touched && lastName.error && <div className='error'>{ lastName.error }</div> }
                    </fieldset>

                    <fieldset className='form-group'>
                        <label>Description:</label>

                        <textarea
                            className="form-control"
                            {...description }
                            placeholder="Description"


                            // required for reset form to work (only on textarea's)
                            // see: https://github.com/facebook/react/issues/2533
                            value={description.value || ''}

                            />


                    </fieldset>

                    { this.renderAlert() }

                    <button action='submit' className='btn btn-primary' disabled={submitting}>Save</button>


                </form>
            </div>

        )
    }

}


function validate(formProps) {
    //  our validation function that we pass to reduxForm

    const errors = {};

    //console.log(formProps)


    if (!formProps.firstName) {
        errors.firstName = 'Please enter first name'
    }

    if (!formProps.lastName) {
        errors.lastName = 'Please enter last name'
    }

    //  always return the errors object
    return errors;
}


function mapStateToProps(state) {
    return {
        //saveStatus: state.people.saveStatus

    }
}


//  1st parameter is options, 2nd is state coming into this component, 3rd parameter is the actions for action creators (being triggered from this component)
export default reduxForm({
    form: 'addPerson', //  the name of the form
    fields: ['firstName', 'lastName', 'description'],
    validate
}, mapStateToProps, actions)(PersonInsertView)




