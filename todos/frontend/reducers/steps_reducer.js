import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions'

const initialState = {
        1: { // this is the step with id = 1
            id: 1,
            title: 'walk to store',
            done: false,
            todo_id: 1
        },
        2: { // this is the step with id = 2
            id: 2,
            title: 'buy soap',
            done: false,
            todo_id: 1
        },
}

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);

    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach((obj, idx) => {
                newState[obj.id] = obj;
            })
            return newState;
        case RECEIVE_STEP:
            let nextId = action.step.id;
            let newObj = {}
            newObj[nextId] = action.step;
            const result = Object.assign(newState, newObj);
            return result;
        case REMOVE_STEP:
            let myid = action.step.id
            delete newState[myid];
            return newState;
        default:
            return state;
    }

}

export default stepsReducer;