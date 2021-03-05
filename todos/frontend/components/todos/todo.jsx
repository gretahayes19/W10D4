import React from 'react' 
import TodoItem from './todo_item'
import TodoForm from './todo_form'
// import allTodos from '../reducers/selectors'

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const todos = this.props.todos
        return(
            <div>

            <TodoForm receiveTodo={this.props.receiveTodo}/>

            <ul>
                {todos.map((todo) => <TodoItem key={todo.id}todo={todo} />)}
            </ul>

            </div>
        )
    }
}