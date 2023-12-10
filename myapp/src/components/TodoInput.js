import React, { useRef } from "react";
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
        <input 
            type="text" 
            ref={todoNameRef} 
            placeholder="新しいTodoを追加" 
        />
        <button 
            onClick={handleAddTodo}
            className="todo-addBtn"
        >＋</button>
        
        </div>
    </form>
    </>
    );
};



export default TodoInput;
