import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'


class HomePageView extends Component {
//export default () => {


    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount(){

        if(this.props.authenticated){

            //  redirect them back to the / route
            this.context.router.push('/dashboard')
        }

    }




    render() {


        return (
            <div>
                <h3>Rolodecks</h3>

                <div>
                    Want a way to stay in touch with your friends and family?  Rolodecks is here to help!
                </div>

            </div>

        );
    }

}




function mapStateToProps(state){
    return { authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(HomePageView)

