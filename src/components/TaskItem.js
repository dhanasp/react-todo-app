import React, {Component} from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.taskItem.task}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={this.deleteTask}>Delete</button>
                </td>
            </tr>
        );
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }
}

export default TaskItem;
