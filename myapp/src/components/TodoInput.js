import React, { useState} from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ todos, setTodos }) => {
  
  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setTodos((prevTodos) => [
      ...todos,
      {
        id: uuidv4(),
        text: inputText
      }
    ]);
    setInputText("")    
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  // const handleAddTodo = () => {
  //   const name = todoNameRef.current.value;
  //   if (name === "") return;
  //   setTodos((prevTodos) => [
  //     ...prevTodos,
  //     { id: uuidv4(), name: name, completed: false },
  //   ]);
  //   todoNameRef.current.value = null;
  // };

  return (
    <>
    <form onSubmit={handleSubmit}>
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
