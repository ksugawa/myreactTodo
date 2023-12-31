import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import addBtn from "../assets/images/icon-add.svg"; 

export const TodoInput = ({ todos, setTodos }) => {

  const [inputText, setInputText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: inputText,
        completed: false,
        editing: false
      },
    ]);
    setInputText("");
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="todoinput-line">
        <input type="text" onChange={(e) => setInputText(e.target.value)} className="todo-input" value={inputText} placeholder="新しいtodoを追加" />
        <button className="todo-addBtn"><img src={addBtn} alt="add-icon"/></button>
      </div>
    </form>
    </>
  );
};

export default TodoInput;
