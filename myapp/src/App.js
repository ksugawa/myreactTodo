import React, { useState } from "react";
import { TodoInput } from "./components/TodoInput.js";
import { TodoList } from "./components/TodoList.js";
import { TodoRest } from "./components/TodoRest.js";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>ToDo List</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoRest todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;