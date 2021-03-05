import { connect } from 'react-redux';
import TodoDetailView from './todo_detailview';
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions'
import { stepsByTodoId } from '../../reducers/selectors'


const mapStateToProps = (state) => {
    return {
        steps: stepsByTodoId(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (todo) => dispatch(removeTodo(todo))
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoDetailView);
