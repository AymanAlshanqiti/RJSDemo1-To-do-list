import React, { Component } from "react";

class List extends Component {
  setIconState = iconState => {
    if (iconState) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };
  render() {
    const tasks = this.props.tasks.map(task => {
      return (
        <tr key={task.task}>
          <td>
            <i className={this.setIconState(task.done)} />
          </td>
          <td>{task.task}</td>
          <td className={task.priority}>{task.priority}</td>
        </tr>
      );
    });
    return tasks;
  }
}

export default List;
