import React from 'react'



export default class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            body: props.todo.body,
            done: props.todo.done,
            detail: false,
        }

        this.toggleDone = this.toggleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.hideDetails = this.hideDetails.bind(this);
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

    // hideDetails(e) {

    // }

    render() {
        let done;
        if (this.state.done) {
            done = "Done"
        } else {
            done = "Not Done"
        }

        return( 
            <li>
                <div>
                    Body:{this.state.body}
                    <br />
                    <button onClick={this.toggleDone}>{`${done}`}</button>
                    <button onClick={this.handleDelete}>Remove Todo</button>
                </div>
            </li>
        )
    }

}