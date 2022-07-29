import React, {Component} from 'react';

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''}
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task} placeholder="Enter Task" onChange={this.handleChange}
                       autoFocus/>
                <button type="submit">Add</button>
            </form>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTaskForTodo(this.state.task);
        this.setState({task: ''})
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }
}

export default CreateTask;
