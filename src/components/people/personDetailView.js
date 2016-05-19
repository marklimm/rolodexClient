import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'



class PersonDetailView extends Component {
//export default () => {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            tags: [],


        }
    }


    componentWillMount() {
        console.log('this persondetailview would be a good time to call an action creator to fetch posts');

        this.props.fetchPerson(this.props.params.id);
    }


    componentDidMount(){
        //  call only on initial render

        var self = this;

        //  for some reason using toastr.options here doesn't work.  I thought it would after seeing http://codeseven.github.io/toastr/demo.html
        //toastr.options = {
        //    timeout: 1000,
        //    extendedTimeout: 60,
        //
        //};

        //  but this does work
        toastr.options.timeOut = 4000; // How long the toast will display without user interaction
        toastr.options.extendedTimeOut = 30; // How long the toast will display after a user hovers over it


        toastr.options.onShown = function() {
            console.log('toastr has been shown');


            //  clearing the saveStatus state property is necessary to make sure the save confirmation message appears the 2nd time that the user Saves
            self.props.clearSaveStatus();
        }

        toastr.options.onHidden = function() {
            console.log('toastr has been hidden');

        }

        toastr.options.onclick = function(){
            console.log('you clicked this stuff')
        }


    }


    componentWillReceiveProps(nextProps) {

        const { selectedPerson, saveStatus } = nextProps;

        if(saveStatus === 'success') {
debugger;
            // Display a success toast, with a title
            toastr.success(nextProps.values.firstName + ' ' + nextProps.values.lastName + ' has been saved', 'Save Completed')



        }



    }

    handleFormSubmit(formProps, dispatch) {


        //console.log(formProps.email, formProps.password)

        this.props.updatePerson(this.props.params.id, formProps, dispatch);
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

                    &nbsp; &nbsp;
                    <button type="button" className='btn btn-info' disabled={pristine} onClick={resetForm}>
                        Reset
                    </button>

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
        initialValues: state.people.selectedPerson,
        saveStatus: state.people.saveStatus

    }
}

//  this code is in the example, but it appears that I can do without this
//PersonDetailView.propTypes = {
//    fields: PropTypes.object.isRequired,
//    handleSubmit: PropTypes.func.isRequired,
//    resetForm: PropTypes.func.isRequired,
//    submitting: PropTypes.bool.isRequired
//}

//  1st parameter is options, 2nd is state coming into this component, 3rd parameter is the actions for action creators (being triggered from this component)
export default reduxForm({
    form: 'editPerson', //  the name of the form
    fields: ['firstName', 'lastName', 'description'],
    validate
}, mapStateToProps, actions)(PersonDetailView)

