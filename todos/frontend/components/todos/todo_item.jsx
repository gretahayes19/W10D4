import React from 'react' 
import TodoDetailView from './todo_detailview';

export default class TodoItem extends React.Component {

    constructor (props) {
        super(props) 
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            body: props.todo.body,
            done: props.todo.done,
            detail: false,
        }
        this.hideDetails = this.hideDetails.bind(this);
    }

    hideDetails(e) {
        this.setState({
            detail: !this.state.detail,
        })
    }


    render() {

        const todo = this.props.todo;
        let deet;
        if (this.state.detail) {
            deet = <TodoDetailView removeTodo={this.props.removeTodo} todo={todo} />
        }

        return (
            <div>
                <h3 onClick={this.hideDetails}>Title: {this.state.title}</h3>
                {deet}
            </div>
        )
    }


}




