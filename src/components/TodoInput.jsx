import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [newTask, setNewTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (newTask === "") return;

    addTodo(newTask);

    setNewTask("");
  }

  return (
    <form className="todo-input" onSubmit={submitHandler}>
      <label htmlFor="task">New Task</label>
      <input
        type="text"
        id="task"
        placeholder="Create new task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
