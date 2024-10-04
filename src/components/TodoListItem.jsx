import React from "react";
import DeleteButton from "./DeleteButton";

function TodoListItem({ todo, completed, id, onDelete }) {
  return (
    <li className="list-item">
      <label>
        <input type="checkbox" />
        {todo}
      </label>
      <DeleteButton id={id} onDelete={onDelete} />
    </li>
  );
}

export default TodoListItem;
