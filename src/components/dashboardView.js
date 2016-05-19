import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'


class DashboardView extends Component {
//export default () => {

    //
    //componentWillMount() {
    //    console.log('this would be a good time to call an action creator to fetch posts');
    //
    //    debugger;
    //    this.props.fetchPeople();
    //}
    //


    renderUserGreeting() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));


        return (
            <label>Welcome {currentUser.email}!</label>
        );


    }

    //renderPeopleList() {
    //
    //    if(!this.props.people){
    //        return (
    //            <div>No people yet</div>
    //        )
    //    }
    //
    //    return this.props.people.map((person) => {
    //        return (
    //
    //            <div key={person._id}>
    //
    //                <Link to={`person/${person._id}`}>
    //                    <span className='pull-xs-right'>pulled right</span>
    //                    <strong>{person.fullName}</strong>
    //                </Link>
    //
    //            </div>
    //
    //        )
    //    })
    //}


    render() {


        return (
            <div>
                <h3>Rolodex Dashboard</h3>

                <div>


                    { this.renderUserGreeting() }

                    <br /><br />
                    From the left-hand menu, you'll be able to access various features of the site


                </div>

            </div>

        );
    }

}


function mapStateToProps(state) {

    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, null)(DashboardView)


