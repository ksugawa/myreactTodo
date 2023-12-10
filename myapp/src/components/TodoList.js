import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, onDelete }) => {
  return todos.map((todo) => (
  <Todo key={todo.id} todo={todo} setTodos={setTodos} onDelete={onDelete}/>
  ));
};

export default TodoList;