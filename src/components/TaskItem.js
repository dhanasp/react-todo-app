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
                    <button>Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
