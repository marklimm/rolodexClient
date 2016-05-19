import axios from 'axios';
import _ from 'lodash';

import { browserHistory } from 'react-router'

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_PEOPLE, FETCH_PERSON, UPDATE_PERSON, CLEAR_SAVE_STATUS } from './types'


const ROLODEX_API_URL = 'http://localhost:3000/api';

//const API_KEY = '?key=marklimm';

//const peopleArr = [
//    {
//        id: 1,
//        name: 'John Cena',
//        description: 'a 15-time WWE Champion'
//    },
//    {
//        id: 2,
//        name: 'Mark Henry',
//        description: 'had a fake retirement ceremony'
//    },
//    {
//        id: 3,
//        name: 'Seth Rollins',
//        description: 'will be back'
//    },
//];


export function fetchPeople() {

    return function(dispatch) {

        axios.get(ROLODEX_API_URL + '/people', {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(response => {
                console.log(response)


                dispatch({
                    type: FETCH_PEOPLE,
                    payload: response
                })
            })

    }
}


export function fetchPerson(id) {

    const returnedPromise = axios.get(`${ROLODEX_API_URL}/people/${id}`);

    //const selectedPerson = _.find(peopleArr, function(o) { return o.id === parseInt(id); });
    //const selectedPerson = _.find(peopleArr, (o) => o.id === parseInt(id));

    return {
        type: FETCH_PERSON,
        payload: returnedPromise
    }
}

export function updatePerson(personId, personFields) {

    const returnedPromise = axios.put(
        `${ROLODEX_API_URL}/people/` + personId,
        {
            firstName: personFields.firstName,
            lastName: personFields.lastName,
            description: personFields.description
        }
    );

    return {
        type: UPDATE_PERSON,
        payload: returnedPromise
    }
}

export function clearSaveStatus(){


    return {
        type: CLEAR_SAVE_STATUS,
        payload: null
    }
}





//  we're passing in an object parameter that contains an email and and a password property
export function signinUser({ email, password }){

    //  submit email/password to the server

    //  if request is good -->
    //      update state to indicate user is authenticated
    //      save JWT token
    //      redirect user to route /feature

    //  if request is bad -->
    //      show an error to the user


    //  redux thunk allows us to return a function instead of an object.  Allows us access to the "dispatch" that controls which reducer the action gets sent to
    return function(dispatch){

        //  the only thing redux thunk does is give us access to the dispatch function so that we can send the action off to the reducers at any time we want
        //dispatch({ type: ___ })

        //  we can dispatch as many actions as we want with redux thunk
        //  and we can dispatch whenever we want


        //  submit email/password
        //  using es6 to avoid writing this: { email: email, password: password }
        const signinPromise = axios.post(`${ROLODEX_API_URL}/signin`, { email, password });

        signinPromise
            .then(response => {
                //  success = server responds 200 response

                //  update state to indicate user is authenticated
                dispatch({ type: AUTH_USER })

                //  we are using redux thunk here because we want to take additional actions in addition to just updating our state (by sending down to the reducer)


                //  save the JWT token
                //  and when it's time to log the user out, we simply remove this item from localStorage
                localStorage.setItem('token', response.data.token)

                //  save additional user fields into localStorage here?
                localStorage.setItem('currentUser', JSON.stringify(response.data))

                //  redirect user to route '/feature'
                browserHistory.push('/dashboard')
            })
            .catch(() => {
                //  fail = server returned something other than 200, like (400 bad request or 401 unauthorized for example)

                //  calling the below action creator.  So this is the signinUser action creator calling another action creator
                dispatch(authError('Bad login info'))
            })

    }
}


//  another action creator for handling the case of an invalid login
export function authError(error){

    return {
        type: AUTH_ERROR,
        payload: error
    }
}


export function signoutUser(){

    //  delete the JWT
    localStorage.removeItem('token')
    //localStorage.setItem('token', null)

    //  flip our state's authenticated flag to false
    return { type: UNAUTH_USER }
}



export function signupUser({ email, password }){

    return function(dispatch){


        //  submit email/password
        //  using es6 to avoid writing this: { email: email, password: password }
        const signupPromise = axios.post(`${ROLODEX_API_URL}/signup`, { email, password });



        signupPromise
            .then(response => {
                //  success = server responds 200 response

                //  update state to indicate user is authenticated
                dispatch({ type: AUTH_USER })

                //  we are using redux thunk here because we want to take additional actions in addition to just updating our state (by sending down to the reducer)


                //  save the JWT token
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('currentUser', JSON.stringify(response.data))


                //  redirect user to route '/feature'
                browserHistory.push('/dashboard')
            })
            .catch(response => {
                //  fail = server returned something other than 200, like (400 bad request or 401 unauthorized for example)

                //  calling the below action creator.  So this is the signinUser action creator calling another action creator
                dispatch(authError(response.data.error))
            })

    }
}


//export function createPost(props){
//
//    //  contents of the form (that was submitted) are in props
//
//    const returnedPromise = axios.post(`${ROLODEX_API_URL}/posts${API_KEY}`, props);
//
//
//    return {
//        type: CREATE_POST,
//        payload: returnedPromise
//    }
//}
//
//export function deletePost(id) {
//
//    const returnedPromise = axios.delete(`${ROLODEX_API_URL}/posts/${id}${API_KEY}`);
//
//
//    return {
//        type: DELETE_POST,
//        payload: returnedPromise
//    }
//}
