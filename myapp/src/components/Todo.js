import React from "react";
import style from "../index.css";
import editIcon from "../assets/images/icon-edit.svg"; 
import deleteIcon from "../assets/images/icon-delete.svg"; 


export const Todo = ({ todo, todos, setTodos }) => {
  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
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
        <button
          onClick={() => handleCompleted(todo.id)}
          className="icon-done"
        ></button>
        <div className="todoText">{todo.name}</div>
      </div>
      <div className={`${style.icons} ${style.flex}`}>
        <button onClick={() => handleEdit(todo.id)} className="icon-edit">
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => handleClear(todo.id)} className="icon-delete">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
