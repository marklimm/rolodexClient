import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/app';

import HomePageView from './components/homePageView';
import DashboardView from './components/dashboardView';

import PeopleIndexView from './components/people/peopleIndexView';
import PersonDetailView from './components/people/personDetailView';

import SignInView from './components/authentication/signinView';
import SignOutView from './components/authentication/signoutView';
import RegisterView from './components/authentication/registerView';


import requireAuth from './components/hoc/require_authentication'
import { AUTH_USER } from './actions/types'

const Greeting = () => {
    return <div>Hello there!</div>
}



//  IndexRoute is a default route ... rendering what should display in the "placeholder" (this.children.props) when the user goes to the default/index route.  If the user specifies a different route then the other routes are used

//<Route path='person/team/:teamid' component={PersonDetailView} />
export default (

    <Route path='/' component={App}>
        <IndexRoute component={HomePageView} />
        <Route path='/dashboard' component={requireAuth(DashboardView)} />
        <Route path='/person' component={requireAuth(PeopleIndexView)} />
        <Route path='/person/:id' component={requireAuth(PersonDetailView)} />

        <Route path='/signin' component={SignInView} />
        <Route path='/register' component={RegisterView} />
        <Route path='/signout' component={SignOutView} />




    </Route>
)



