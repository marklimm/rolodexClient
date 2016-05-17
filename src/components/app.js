import React from 'react';
import { Component } from 'react';

import Header from './header'
//import Sidebar from './sidebars/sidebar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />



                <div className='container-fluid' style={{paddingTop: '20px'}}>



                    <div className="row">


                        {this.props.sidebar}

                        <div className="col-xs-12 col-sm-9">



                            {this.props.main}



                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
