import React, { useState } from "react";

function TodoListItem({
  title,
  completed,
  id,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, editedTitle);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span style={completed ? { textDecoration: "line-through" } : {}}>
            {title}
          </span>
        )}
      </label>
      <button className="btn" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="btn" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
