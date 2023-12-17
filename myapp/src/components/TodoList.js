import React from "react";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo"


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
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            editing: !todo.editing,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return todos.map((todo) => (
    todo.editing ? (
      <EditTodo key={todo.id} editTodo={editTodo} todo={todo} />
    ) : (
      <Todo
        key={todo.id}
        todo={todo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        handleCompleted={handleCompleted}
      />
    )
  ));
};

export default TodoList;
