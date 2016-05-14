import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


//  using react-router
import { Router, browserHistory } from 'react-router';

import reduxThunk from 'redux-thunk'

//import App from './components/app';
import reducers from './reducers';
import { AUTH_USER } from './actions/types'


import routes from './routes'
import promise from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token')

//  if we have a token, consider the user to be signed in
if(token){
    //  we need to update application state

    //  we're creating an instance of our redux store ahead of time

    store.dispatch({ type: AUTH_USER })
}



ReactDOM.render(
    <Provider store={store}>

        <Router history={browserHistory} routes={routes} />

    </Provider>
    , document.querySelector('#container'));

