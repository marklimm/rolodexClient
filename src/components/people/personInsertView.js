import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { fetchPerson, updatePerson, clearSaveStatus } from '../../actions/index'

//import { Link } from 'react-router'



class PersonInsertView extends Component {
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


        //this.props.fetchPerson(this.props.params.id);
    }


    componentWillReceiveProps(nextProps) {

        //const { selectedPerson, saveStatus } = nextProps;
        //
        //if(!this.state.firstName){
        //    //  not sure if this is the best way, but if state hasn't been set yet, set it.  This is because this event handler gets called on the initial load to populate the person and again when "Save" is clicked.  The alternative would be to have the PUT /person API route return the properties of the person and that gets fed into here
        //    this.setState({
        //        firstName: selectedPerson.firstName,
        //        lastName: selectedPerson.lastName,
        //        description: selectedPerson.description
        //    })
        //
        //}
        //
        //if(saveStatus === 'success') {
        //
        //    // Display a success toast, with a title
        //    toastr.success(this.state.firstName + ' ' + this.state.lastName + ' has been saved', 'Save Completed')
        //
        //}

    }

    componentDidMount(){
        //  call only on initial render

console.log('personinserview componentdid mount')

    }

    componentDidUpdate(prevProps, prevState){
        //  called everytime other than the initial render

    }

    onFormSubmit2(event) {

        debugger;
        event.preventDefault();


        //const personId = this.props.selectedPerson._id;
        //
        //
        //
        //this.props.updatePerson(personId, {
        //    firstName: this.state.firstName,
        //    lastName: this.state.lastName,
        //    description: this.state.description
        //});

    }


    renderPersonCreateForm() {


//onSubmit={this.onFormSubmit2.bind(this)}
        return (
            <div>

                <h3>Create a new person</h3>




                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">First Name</label>

                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputFN"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={event => { this.setState({ firstName: event.target.value });  } }
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">Last Name</label>

                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputFN"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={event => { this.setState({ lastName: event.target.value });  } }
                                />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">Description</label>


                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                id="inputDescription"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={event => { this.setState({ description: event.target.value });  } }
                                />
                        </div>
                    </div>



                    <div className="form-group row">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={event => this.onFormSubmit2}>Save</button>
                        </div>
                    </div>



            </div>

        )
    }


    render() {


        return (
            <div>
                { this.renderPersonCreateForm() }

            </div>

        );
    }

}

function mapStateToProps(state) {

    return {
    };
}


export default connect(mapStateToProps, {clearSaveStatus, fetchPerson, updatePerson })(PersonInsertView);


