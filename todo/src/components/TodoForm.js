import React from "react";
import { connect } from "react-redux";
import { addTask, clickAdd, clearCompleted } from "../actions/action";

class TodoForm extends React.Component {
  addNewTask = event => {
    console.log(event.target.value);
    this.props.addTask(event.target.value);
  };
  clickNewAdd = event => {
    event.preventDefault();
    console.log("clickNewAdd clicked");
    const tasks = {
      task: this.props.newTask,
      completed: false,
      id: Math.random()
    };
    this.props.clickAdd(tasks);
  };

  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>
        <input
          value={this.props.newTask}
          onChange={this.addNewTask}
          placeholder="add todo here"
        />
        <button onClick={this.clickNewAdd}>Add Task</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    newTask: state.newTask
  };
};

export default connect(
  mapStateToProps,
  { addTask, clickAdd, clearCompleted }
)(TodoForm);
