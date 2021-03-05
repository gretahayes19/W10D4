import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions'

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};



const todosReducer = (state = initialState, action) => {
    Object.freeze(state);

    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach((obj, idx) => {
                newState[obj.id] = obj;
            })
           return newState;
        case RECEIVE_TODO:  
            let nextId = action.todo.id; 
            let newObj = {}
            newObj[nextId] = action.todo;
            const result = Object.assign(newState, newObj);
            return result;
        case REMOVE_TODO:
            let myid = action.todo.id
            delete newState[myid];
            return newState;
        default:
            return state;
    }
};

export default todosReducer;


