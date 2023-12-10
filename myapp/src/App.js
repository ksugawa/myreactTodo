import { useState } from "react";
import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="todo-list">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div className="todo-rest">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>

    </>
  );
}

export default App;