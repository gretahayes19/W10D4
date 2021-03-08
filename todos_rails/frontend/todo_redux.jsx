import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store" 
import {receiveTodos, receiveTodo, removeTodo, fetchTodos1} from './actions/todo_actions'
import { receiveSteps, removeStep, receiveStep } from './actions/step_actions';
import Root from "./components/root"
import { allTodos, stepsByTodoId } from "./reducers/selectors"
import {fetchTodos, createTodo} from "./util/todo_api_util"


const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Root store={store} />,
         document.getElementById("root")
         )

    window.store = store; 
})


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.receiveStep = receiveStep
window.receiveSteps = receiveSteps
window.removeStep = removeStep;
window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;
window.fetchTodos = fetchTodos
window.createTodo = createTodo
window.fetchTodos1 = fetchTodos1 