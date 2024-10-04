import React from "react";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
