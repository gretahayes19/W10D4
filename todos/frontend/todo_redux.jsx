import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store" 
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions'
import { receiveSteps, removeStep, receiveStep } from './actions/step_actions';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"))

    const store = configureStore();
    window.store = store; 
})


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.receiveStep = receiveStep
window.receiveSteps = receiveSteps
window.removeStep = removeStep;

