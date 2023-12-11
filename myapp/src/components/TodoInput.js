import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ todos, setTodos }) => {
  
  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {
        id: uuidv4(),
        name: name,
        completed: false
      }];
    });
    todoNameRef.current.value = null;
  };

  return (
    <>
    <form onSubmit={handleAddTodo}>
      <div className="todoinput-line">
        <input type="text" ref={todoNameRef} placeholder="新しいTodoを追加" />
        <button className="todo-addBtn">
        <img src="/assets/images/icon-add.svg" alt="add-icon"/>
        </button>
      </div>
    </form>
    </>
  );
};

export default TodoInput;
