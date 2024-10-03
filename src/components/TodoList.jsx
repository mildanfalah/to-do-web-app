import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default TodoList;
