import React from "react";
import TodoList from "./TodoList";
import { getData } from "../utils/data";

function TodoApp() {
  const todos = getData();

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      {console.log(todos)}
    </div>
  );
}

export default TodoApp;
