import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/app';

import HomePageView from './components/homePageView';
import DashboardView from './components/dashboardView';

import PeopleIndexView from './components/people/peopleIndexView';
import PersonDetailView from './components/people/personDetailView';


import EventIndexView from './components/event/eventIndexView';
import EquipmentIndexView from './components/equipment/equipmentIndexView';

import SignInView from './components/authentication/signinView';
import SignOutView from './components/authentication/signoutView';
import RegisterView from './components/authentication/registerView';

import Sidebar from './components/sidebars/sidebar'

import requireAuth from './components/hoc/require_authentication'
import { AUTH_USER } from './actions/types'

const Greeting = () => {
    return <div>Hello there!</div>
}


//  IndexRoute is a default route ... rendering what should display in the "placeholder" (this.children.props) when the user goes to the default/index route.  If the user specifies a different route then the other routes are used

//<Route path='person/team/:teamid' component={PersonDetailView} />
export default (

    <Route path='/' component={App}>
        <IndexRoute components={{main: HomePageView}} />


        <Route path='/dashboard' components={{main: requireAuth(DashboardView), sidebar: Sidebar}} />

        <Route path='/person' components={{main: requireAuth(PeopleIndexView), sidebar: Sidebar}} />
        <Route path='/person/:id' components={{main: requireAuth(PersonDetailView), sidebar: Sidebar}} />

        <Route path='/event' components={{main: requireAuth(EventIndexView), sidebar: Sidebar}} />

        <Route path='/equipment' components={{main: requireAuth(EquipmentIndexView), sidebar: Sidebar}} />



        <Route path='/signin' components={{main: SignInView}} />
        <Route path='/register' components={{main: RegisterView}} />
        <Route path='/signout' components={{main: SignOutView}} />


    </Route>
)



