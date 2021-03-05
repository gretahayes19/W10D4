import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        // prop = props.receiveTodo 
        super(props)
        this.state = {
            id: this.uniqueId(),
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    uniqueId() {
        return new Date().getTime();
    }

    updateTitle(e) {
        this.setState({title: e.target.value})
    }

    updateBody(e) {
        this.setState({body: e.target.value })
    }

    updateStatus(e) {
        this.setState({done: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state) 
        this.setState({
            id: this.uniqueId(),
            title: "",
            body: "",
            done: false
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title 
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <br />
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody} />
                </label>
                <br />
                <label>Status:&nbsp;&nbsp;

                    <label>Done 
                        <input type="radio" name="done" value={this.state.done} onChange={this.updateStatus} />
                    </label>
                    <label>Not Done
                        <input type="radio" name="done" value={this.state.done} onChange={this.updateStatus} />
                    </label>
                </label>
                <br />
                <input type="submit" value="Add Todo!!!"/>
            </form>
        )
    }



}