import React from 'react' 

const TodoItem = (props) => {
    const todo = props.todo
    return (
        <li>{todo.title}</li> 
    )
}

export default TodoItem;