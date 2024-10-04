import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
