import React from "react";
import style from "../index.css";

export const Todo = ({ todo, todos, setTodos }) => {
  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleEdit = (id) => {
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

  const handleClear = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <div className="flex">
        <button onClick={() => handleCompleted(todo.id)} className="icon-done"></button>
        <div className="todoText">{todo.name}</div>
      </div>
      <div className={`${style.icons} ${style.flex}`}>
        <button onClick={() => handleEdit(todo.id)} className="icon-edit">
          <img src="/assets/images/icon-edit.svg" alt="edit-icon" />
        </button>
        <button onClick={() => handleClear(todo.id)} className="icon-delete">
          <img src="/assets/images/icon-delete.svg" alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
