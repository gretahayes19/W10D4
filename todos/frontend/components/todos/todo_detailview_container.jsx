import { connect } from 'react-redux';
import TodoDetailView from './todo_detailview';
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions'
import { stepsByTodoId } from '../../reducers/selectors'
import { receiveSteps, receiveStep, removeStep} from '../../actions/step_actions'



const mapStateToProps = (state) => {
    return {
        steps: stepsByTodoId(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        receiveSteps: (steps) => dispatch(receiveSteps(steps)) 
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoDetailView);
