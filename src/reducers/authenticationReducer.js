

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types'

export default function(state = {}, action){

    switch(action.type){
        case AUTH_USER:

            //  return all of our existing state, and specify that authenticated = true
            return { ...state, authenticated: true, error: null, currentUser: action.payload };

        case UNAUTH_USER:

            return { ...state, authenticated: false, error: null };

        case AUTH_ERROR:
            return { ...state, error: action.payload };

        //case FETCH_MESSAGE:
        //    return { ...state, message: action.payload }
    }

    return state;
}