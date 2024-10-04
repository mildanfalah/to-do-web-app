import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          onDelete={onDelete}
          {...item}
        />
      ))}
    </ul>
  );
}

export default TodoList;
