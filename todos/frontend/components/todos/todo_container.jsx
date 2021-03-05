import { connect } from 'react-redux';
import ToDo from './todo';
import {allTodos} from '../../reducers/selectors'
import { receiveTodos, receiveTodo, removeTodo} from '../../actions/todo_actions'

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state),     
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        removeTodo: (todo) => dispatch(removeTodo(todo)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)