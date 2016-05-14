import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SignOut extends Component {

    componentWillMount(){
        //  call the signoutUser action creator as soon as this page is mounted
        this.props.signoutUser();
    }

    render() {

        return (
            <div>Sorry to see you go ...</div>
        )
    }
}


export default connect(null, actions)(SignOut);