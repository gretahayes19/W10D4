import { connect } from 'react-redux';
import ToDo from './todo';
import {allTodos} from '../../reducers/selectors'
import { receiveTodos, receiveTodo, removeTodo, fetchTodos1} from '../../actions/todo_actions'

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
        fetchTodos1: () => dispatch(fetchTodos1()) 
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)