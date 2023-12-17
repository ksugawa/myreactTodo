import React from "react";
import style from "../index.css";
import editIcon from "../assets/images/icon-edit.svg"; 
import deleteIcon from "../assets/images/icon-delete.svg"; 


export const Todo = ({ task, editTodo, deleteTodo, handleCompleted }) => {

  return (
    <div className={`todo ${task.completed ? "completed" : ""}`}>
      <div className="flex">
        <button
          onClick={() => handleCompleted(task.id)}
          className="icon-done"
        ></button>
        <div className="todoText">{task.name}</div>
      </div>
      <div className={`${style.icons} ${style.flex}`}>
        <button onClick={() => editTodo(task.id)} className="icon-edit">
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => deleteTodo(task.id)} className="icon-delete">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
