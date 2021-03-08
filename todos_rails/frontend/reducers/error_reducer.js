import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions'

 const initialState = { 
     errors: [],
 }
export const errorsReducer = (state = initialState, action) => {
    Object.freeze(state);

    const newState = Object.assign({}, state);

    switch(action.type) {
        case CLEAR_ERRORS:
            return newState;
        case RECEIVE_ERRORS:
            action.errors.forEach((error) => 
                newState.errors.push(error)
            )
            return newState
        default: 
            return state;
    }
}

