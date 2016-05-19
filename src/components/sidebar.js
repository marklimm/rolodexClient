import React, { Component } from 'react';

import { Link } from 'react-router'


class Sidebar extends Component {
//export default () => {


    render() {

//      <a className="nav-link" data-toggle='tab' href='test2' role='tab'>Event</a>
        return (


            <div className="col-xs-12 col-sm-3">

                <ul id='ulSidebar' className="nav nav-pills nav-stacked" role='tablist'>
                    <li className="nav-item">


                        <Link to='/dashboard' className="nav-link" activeClassName="active">Dashboard</Link>

                    </li>
                    <li className="nav-item">


                        <Link to='/person' className="nav-link" activeClassName="active" role='tab' >People</Link>

                    </li>

                    <li className="nav-item">


                        <Link to='/event' className="nav-link" activeClassName="active" role='tab' >Event</Link>

                    </li>
                    <li className="nav-item">

                        <Link to='/equipment' className="nav-link" activeClassName="active">Equipment</Link>

                    </li>
                </ul>


            </div>
        );
    }

}



export default Sidebar;

