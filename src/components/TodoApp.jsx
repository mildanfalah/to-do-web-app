import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AddPage from "../pages/AddPage";

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
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default TodoApp;
