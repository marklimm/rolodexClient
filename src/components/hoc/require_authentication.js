import React, { Component } from 'react'

import { connect } from 'react-redux'

export default function(ComposedComponent){

    class ComponentWithAuthentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount(){

            if(!this.props.authenticated){

                //  redirect them back to the / route
                this.context.router.push('/')
            }

        }

        componentWillUpdate(nextProps){
            //  componentWillUpdate is invoked immediately before rendering when new props or state are being received

            if(!nextProps.authenticated){

                //  redirect them back to the / route
                this.context.router.push('/')
            }

        }

        render(){

            //console.log(this.context.router)
            //console.log('rendering', ComposedComponent)



            return <ComposedComponent { ...this.props } />
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.auth.authenticated}
    }

    return connect(mapStateToProps)(ComponentWithAuthentication)
}


