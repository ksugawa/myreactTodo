import React from "react";
import style from "../index.css";
import editIcon from "../assets/images/icon-edit.svg"; 
import deleteIcon from "../assets/images/icon-delete.svg"; 


export const Todo = ({ todo, todos, setTodos, editTodo, deleteTodo, handleCompleted }) => {

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
        <button onClick={() => editTodo(todo.id)} className="icon-edit">
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="icon-delete">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
