import React from "react";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo";

export const TodoList = ({ todos, setTodos }) => {
  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, editing: !todo.editing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return todos.map((todo) =>
    todo.editing ? (
      <EditTodo key={todo.id} editTodo={editTask} task={todo} />
    ) : (
      <Todo
        key={todo.id}
        task={todo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        handleCompleted={handleCompleted}
      />
    )
  );
};

export default TodoList;
