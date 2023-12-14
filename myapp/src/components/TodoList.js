import React from "react";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo"
import { v4 as uuidv4 } from "uuid";


export const TodoList = ({ todos, toggleTodo, setTodos, editTodo }) => {
  return todos.map((todo) => (
    todo.editing ? (
      <EditTodo key={todo.id} editTodo={editTodo} todo={todo} />
    ) : (
      <Todo
        key={uuidv4()}
        todo={todo}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
    )
  ));
};

export default TodoList;
