import React, { useState } from "react";
import addBtn from "../assets/images/icon-add.svg"; 


export const EditTodo = ({ todo, editTodo }) => {

  const [inputText, setInputText] = useState(todo.name);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputText, todo.id);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="todoinput-line">
        <input type="text" onChange={(e) =>setInputText(e.target.value)} value={inputText} className="todo-input-edit" placeholder="更新" />
        <button className="todo-addBtn"><img src={addBtn} alt="add-icon"/></button>
      </div>
    </form>
    </>
  );
};

export default EditTodo;
