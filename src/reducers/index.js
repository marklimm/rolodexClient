import { combineReducers } from 'redux';

import AuthenticationReducer from './authenticationReducer';
import PeopleReducer from './peopleReducer';
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
    //state: (state = {}) => state

    auth: AuthenticationReducer,
    form,
    people: PeopleReducer
});

export default rootReducer;
