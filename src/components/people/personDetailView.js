import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { fetchPerson, updatePerson, clearSaveStatus } from '../../actions/index'

//import { Link } from 'react-router'



class PersonDetail extends Component {
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
        console.log('this would be a good time to call an action creator to fetch posts');


        this.props.fetchPerson(this.props.params.id);
    }


    componentWillReceiveProps(nextProps) {

        const { selectedPerson, saveStatus } = nextProps;

        if(!this.state.firstName){
            //  not sure if this is the best way, but if state hasn't been set yet, set it.  This is because this event handler gets called on the initial load to populate the person and again when "Save" is clicked.  The alternative would be to have the PUT /person API route return the properties of the person and that gets fed into here
            this.setState({
                firstName: selectedPerson.firstName,
                lastName: selectedPerson.lastName,
                description: selectedPerson.description
            })

        }

        if(saveStatus === 'success') {

            // Display a success toast, with a title
            toastr.success(this.state.firstName + ' ' + this.state.lastName + ' has been saved', 'Save Completed')

        }

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

    componentDidUpdate(prevProps, prevState){
        //  called everytime other than the initial render

    }

    onFormSubmit(event) {
        event.preventDefault();

        const personId = this.props.selectedPerson._id;



        this.props.updatePerson(personId, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description
        });

    }


    renderPerson() {

        const { selectedPerson } = this.props;

        if (!selectedPerson) {
            return <div>Loading ...</div>
        }


        return (
            <div>

                <h3>{ this.state.firstName + ' ' + this.state.lastName }</h3>





                <form
                    onSubmit={this.onFormSubmit.bind(this)}
                    >

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
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>


            </div>

        )
    }


    render() {


        //
        //<div className='text-xs-right'>
        //
        //    <Link to='posts/new' className='btn btn-primary'>
        //        Add a Post
        //    </Link>
        //</div>
        //
        //<h3>Posts</h3>
        //<ul className='list-group'>
        //    { this.renderPosts() }
        //</ul>
        //
        //
        return (
            <div>
                { this.renderPerson() }

            </div>

        );
    }

}

function mapStateToProps(state) {

    return {
        selectedPerson: state.people.selectedPerson,
        saveStatus: state.people.saveStatus
    };
}


export default connect(mapStateToProps, {clearSaveStatus, fetchPerson, updatePerson })(PersonDetail);


