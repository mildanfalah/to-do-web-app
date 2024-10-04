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
    <form className="todo-input" onSubmit={submitHandler}>
      <label htmlFor="task">New Task</label>
      <input
        type="text"
        id="task"
        placeholder="Create new task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TodoInput;
