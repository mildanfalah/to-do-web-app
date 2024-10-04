import React, { useState } from "react";
import SearchBar from "../components/Searchbar";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Dashboard() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: +new Date(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <section>
      <SearchBar />
      <h2>Todo List</h2>

      <TodoInput addTodo={addTodo} />

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </section>
  );
}

export default Dashboard;
