import React from "react";
import { deleteTodo, getTodos } from "../utils/data";
import TodoList from "../components/TodoList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteTodo(id);

    // update todo state from data.js
    this.setState(() => {
      return {
        todos: getTodos(),
      };
    });
  }

  render() {
    return (
      <section>
        <h2>Todo List</h2>
        <TodoList todos={this.state.todos} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default Dashboard;
