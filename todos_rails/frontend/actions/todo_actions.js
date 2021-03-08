import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    };
};


export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
    }
}

export const fetchTodos1 = () => {
    return (dispatch) => {
        return APIUtil.fetchTodos().then((todos) => {
            console.log(todos)
            return dispatch(receiveTodos(todos))
        })
    }
}


export const createTodoAction = () => {
    return (dispatch) => {
        return APIUtil.createTodo().then((todo)  => {
            console.log(todo)
            return dispatch(receiveTodo(todo))
        })
    }
}