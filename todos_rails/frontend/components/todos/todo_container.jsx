import { connect } from 'react-redux';
import ToDo from './todo';
import {allTodos} from '../../reducers/selectors'
import { receiveTodos, receiveTodo, removeTodo, fetchTodos1, createTodoAction} from '../../actions/todo_actions'

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state),     
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        fetchTodos: () => dispatch(fetchTodos1()),
        createTodo: () => dispatch(createTodoAction()),
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)