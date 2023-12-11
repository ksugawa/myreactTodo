import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ todos, setTodos }) => {

  const [inputText, setInputText] = useState("");
  
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: inputText,
        completed: false,
      },
    ]);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <>
    <form onSubmit={handleAddTodo}>
      <div className="todoinput-line">
        <input type="text" onChange={handleChange} value={inputText} placeholder="新しいTodoを追加" />
        <button className="todo-addBtn">
        <img src="/assets/images/icon-add.svg" alt="add-icon"/>
        </button>
      </div>
    </form>
    </>
  );
};

export default TodoInput;
