import React from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import FooterContent from "./components/FooterContent";

// styling
import "./styles/style.css";

function TodoApp() {
  return (
    <div className="todo-app">
      <header className="todo-app__header">
        <h1 className="todo-app__title">
          <a href="/">Todo App</a>
        </h1>
        <Navigation />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}

export default TodoApp;
