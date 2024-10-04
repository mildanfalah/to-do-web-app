import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
