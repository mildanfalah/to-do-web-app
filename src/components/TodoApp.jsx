import React from "react";
import TodoList from "./TodoList";
import { getData } from "../utils/data";
import TodoInput from "./TodoInput";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddTodoHandler = this.onAddTodoHandler.bind(this);
  }

  onDeleteHandler(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  onAddTodoHandler({ todo }) {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: +new Date(),
            todo,
            completed: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <h2>Add new list</h2>
        <TodoInput addTodo={this.onAddTodoHandler} />
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default TodoApp;
