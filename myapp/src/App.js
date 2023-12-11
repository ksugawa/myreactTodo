import React, { useState } from "react";
import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>ToDo List</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <div className="todo-rest">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>

    </>
  );
}

export default App;