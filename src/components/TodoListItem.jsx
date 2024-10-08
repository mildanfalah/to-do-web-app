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
    <li className="todo-list__list">
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
        <span
          className="todo-list__title"
          style={completed ? { textDecoration: "line-through" } : {}}
        >
          {title}
        </span>
      )}

      <button className="btn btn-todo-list" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-todo-list btn-delete"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
