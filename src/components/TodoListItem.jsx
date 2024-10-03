import React from "react";

function TodoListItem({ todo, completed }) {
  return (
    <li className="list-item">
      <label>
        <input type="checkbox" checked={completed} />
        {todo}
      </label>
      <button className="btn-danger">Delete</button>
    </li>
  );
}

export default TodoListItem;
