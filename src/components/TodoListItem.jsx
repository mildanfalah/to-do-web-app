import React from "react";

function TodoListItem({ title, completed, id, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span style={completed ? { textDecoration: "line-through" } : {}}>
          {title}
        </span>
      </label>
      <button className="btn" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
