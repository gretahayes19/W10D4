import React from 'react' 
import TodoItem from './todo_item'
import TodoForm from './todo_form'
// import allTodos from '../reducers/selectors'

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const todos = this.props.todos
        return(
            <div>

                <TodoForm createTodo={this.props.createTodo}/>

                <h2>All Todos</h2>
                <ul>
                    {todos.map((todo) => <TodoItem removeTodo={this.props.removeTodo} key={todo.id}todo={todo} />)}
                </ul>

            </div>
        )
    }
}