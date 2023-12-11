import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoList = ({ todos, toggleTodo, setTodos }) => {
  return todos.map((todo) => (
      <Todo
        key={uuidv4()}
        todo={todo}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
  ));
};

export default TodoList;
