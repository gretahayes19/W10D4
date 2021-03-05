import React from 'react' 

export default class TodoItem extends React.Component {

    constructor (props) {
        super(props) 
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            body: props.todo.body,
            done: props.todo.done,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(e) {
        e.preventDefault();
        this.setState({
            done: !this.state.done,
        })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }   

    render() {
        let done;
        if (this.state.done) {
            done = "Done"
        } else {
            done = "Not Done"
        }
        return (
            <li>{this.state.title}
            <br></br>
                <button onClick={this.handleDelete}>Remove Todo</button>
                &nbsp;
                <button onClick={this.toggleDone}>{`${done}`}</button>
            </li> 
        )
    }


}

