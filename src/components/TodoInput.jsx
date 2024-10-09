import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const trimmedTask = newTask.trim();

    if (trimmedTask === "") {
      setError("Task cannot be empty");
      return;
    }

    addTodo(trimmedTask);
    setNewTask("");
    setError("");
  }

  function handleInputChange(e) {
    setNewTask(e.target.value);
    if (error) setError("");
  }

  return (
    <>
      <form className="todo-input" onSubmit={submitHandler}>
        <input
          type="text"
          id="task"
          placeholder="Create new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {error && <p className="error-message sub-title">{error}</p>}
    </>
  );
}

export default TodoInput;
