import React, { useState} from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ todos, setTodos }) => {

const TodoInput = ({ todoinput, setTodos}) => {
    
    const todoNameRef = useRef();

    const handleAddTodo = () => {
      const name = todoNameRef.current.value;
      if (name === "") return;
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: uuidv4(), name: name, completed: false },
      ]);
      todoNameRef.current.value = null;
    };

    return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="todoinput-line">
        <button className="todo-addBtn">
        <img src="/assets/images/icon-add.svg" alt="add-icon"/>
        </button>
        </div>
    </form>
    </>
    );
};



export default TodoInput;
