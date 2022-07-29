import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.tasks.map((task, index) => <TaskItem key={index} taskItem={task} id={index}/>)}
                </tbody>
            </table>
        );
    }
}

export default TaskList;
