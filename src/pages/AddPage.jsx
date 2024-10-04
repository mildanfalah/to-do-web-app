import React from "react";
import { addTodo } from "../utils/data";
import TodoInput from "../components/TodoInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function onAddTodoHandler(todo) {
    addTodo(todo);
    navigate("/");
  }

  return (
    <section>
      <h2>Add new task</h2>
      <TodoInput addTodo={onAddTodoHandler} />
    </section>
  );
}

export default AddPage;
