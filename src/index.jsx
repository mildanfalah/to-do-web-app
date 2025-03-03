import React from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./TodoApp";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TodoApp />
  </BrowserRouter>
);
