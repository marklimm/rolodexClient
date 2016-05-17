import React, { Component } from 'react';

import { connect } from 'react-redux'

import { fetchPeople } from '../../actions/index'

import { Link } from 'react-router'


class EventIndex extends Component {
//export default () => {


    componentWillMount() {



        //this.props.fetchPeople();
    }


    //renderPeopleList() {
    //
    //    if(!this.props.people || this.props.people.length === 0){
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
                <h3>Event</h3>

                <div>
                    this will display a list of events
                </div>

            </div>

        );
    }

}

//
//EventIndex.propTypes = {
//    people: React.PropTypes.array,
//    fetchPeople: React.PropTypes.func
//
//    //room: React.PropTypes.string.isRequired,
//    //mode: React.PropTypes.string.isRequired,
//    //user: React.PropTypes.string.isRequired
//};


function mapStateToProps(state) {

    return {
        people: state.people.all
    }
}


//function mapDispatchToProps(dispatch){
//    return bindActionCreators({ fetchPosts }, dispatch);
//}
//export default connect(null, mapDispatchToProps)(EventIndex)


//  a shortcut in contrast to the above code for wiring up the fetchPosts action creator to this container
//export default connect(null, { fetchPosts: fetchPosts })(EventIndex)
export default connect(mapStateToProps, { fetchPeople })(EventIndex)


