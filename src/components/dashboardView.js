import React, { Component } from 'react';

import { Link } from 'react-router'


class HomePageView extends Component {
//export default () => {

    //
    //componentWillMount() {
    //    console.log('this would be a good time to call an action creator to fetch posts');
    //
    //    debugger;
    //    this.props.fetchPeople();
    //}
    //
    //
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



                    <nav>
                        <Link to='/person'>People</Link>


                    </nav>



                </div>

            </div>

        );
    }

}



export default HomePageView;

