import { CLEAR_SAVE_STATUS, FETCH_PEOPLE, FETCH_PERSON, UPDATE_PERSON } from '../actions/types'


const INITIAL_STATE = {
    all: [],
    selectedPerson: null,

    saveStatus: null
};

export default function (state = INITIAL_STATE, action) {

    //  make sure to return a new state, not a mutated state
    switch (action.type) {

        case FETCH_PEOPLE:

            return {
                ...state, all: action.payload.data
            }

        case FETCH_PERSON:

            //  ...state means "de-structure" take what we have in our current state
            return {
                ...state, selectedPerson: action.payload.data
            }

        case UPDATE_PERSON:

            if (action.payload.data.success) {

                return {
                    ...state, saveStatus: 'success'
                }
            }
            else {
                return {
                    ...state, saveStatus: 'error'
                }
            }

        case CLEAR_SAVE_STATUS:

            return {
                ...state, saveStatus: null
            }


        default:
            return state;
    }
}

