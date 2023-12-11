import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodoList = ({ todos, toggleTodo, setTodos }) => {
  return todos.map((todo) => (
    <div className="todo-list">
      <Todo
        key={uuidv4()}
        todo={todo}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
    </div>
  ));
};

export default TodoList;
