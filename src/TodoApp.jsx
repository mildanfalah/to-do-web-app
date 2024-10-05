import React from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

// styling
import "./styles/style.css";

function TodoApp() {
  return (
    <div className="todo-app">
      <header className="todo-app__header">
        <h1>Todo App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default TodoApp;
