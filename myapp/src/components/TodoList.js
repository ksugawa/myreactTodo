import React from "react";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo"


export const TodoList = ({ todos, toggleTodo, setTodos, editTodo }) => {
  return todos.map((todo) => (
    todo.editing ? (
      <EditTodo key={todo.id} editTodo={editTodo} todo={todo} />
    ) : (
      <Todo
        key={todo.id}
        todo={todo}
        todos={todos}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
    )
  ));
};

export default TodoList;
