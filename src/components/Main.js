import React, {Component} from 'react';
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = []; //local storage to fetch previous tasks
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    createTask = (task) => {
        if (task.trim === '') {
            alert("task can\'t be empty")
            return;
        }

        tasks.push({task, isCompleted: false})
        this.setState({tasks: tasks})
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    <CreateTask createTaskForTodo={this.createTask}/>
                    <br/>
                    <TaskList tasks={this.state.tasks}/>
                </div>
            </div>
        );
    }
}

export default Main;
