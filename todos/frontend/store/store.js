import {createStore} from 'redux';
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState)
};

export default configureStore; 


//State Shape: 
// {
//     1: {
//         id: 1,
//         title: 'wash car',
//         body: 'with soap',
//         done: false
//     },
//     2: {
//         id: 2,
//         title: 'wash dog',
//         body: 'with shampoo',
//         done: true
//     },
// }