import React, { Component } from 'react';

import { connect } from 'react-redux'

import { fetchPeople } from '../../actions/index'

import { Link } from 'react-router'


class PeopleIndex extends Component {
//export default () => {


    componentWillMount() {
        console.log('peopleindexview - component will mount');


        this.props.fetchPeople();
    }


    renderPeopleList() {

        if(!this.props.people || this.props.people.length === 0){
            return (
                <div>No people yet</div>
            )
        }

        return this.props.people.map((person) => {
            return (

                <div key={person._id}>

                    <Link to={`person/${person._id}`}>
                        <span className='pull-xs-right'>pulled right</span>
                        <strong>{person.fullName}</strong>
                    </Link>

                </div>

            )
        })
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




                <Link to='/person/createnew' >Create a new person</Link>


                <div style={{paddingTop: '25px'}}>
                    { this.renderPeopleList() }
                </div>








            </div>

        );
    }

}

//
//PeopleIndex.propTypes = {
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
//export default connect(null, mapDispatchToProps)(PeopleIndex)


//  a shortcut in contrast to the above code for wiring up the fetchPosts action creator to this container
//export default connect(null, { fetchPosts: fetchPosts })(PeopleIndex)
export default connect(mapStateToProps, { fetchPeople })(PeopleIndex)


//export default PeopleIndex;

