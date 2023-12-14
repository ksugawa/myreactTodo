import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ todos, setTodos }) => {

  const [inputText, setInputText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;
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
        <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="更新" />
        <button className="todo-addBtn"><img src="/assets/images/icon-add.svg" alt="add-icon"/></button>
      </div>
    </form>
    </>
  );
};

export default TodoInput;
