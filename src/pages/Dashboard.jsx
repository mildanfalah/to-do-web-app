import React, { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useNavigate, useSearchParams } from "react-router-dom";

function Dashboard() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TASK");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    } else {
      navigate("/login");
    }
  });

  useEffect(() => {
    localStorage.setItem("TASK", JSON.stringify(todos));
  }, [todos]);

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

  function editTodo(id, newTitle) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        }
        return todo;
      });
    });
  }

  function handleSearch(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section>
      <h1>Welcome, {userEmail}</h1>
      <SearchBar keyword={keyword} keywordchange={handleSearch} />
      <h2>Todo List</h2>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </section>
  );
}

export default Dashboard;
