import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import tasks from "./data";

// Components
import List from "./List";

class App extends Component {
  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <table>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>TASK</th>
              <th>PRIORITY</th>
            </tr>
          </thead>
          <tbody>
            <List tasks={tasks} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
