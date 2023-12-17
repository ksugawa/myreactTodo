import React, { useState } from "react";

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
        <input type="text" onChange={(e) =>setInputText(e.target.value)} value={inputText} placeholder="新しいTodoを追加" />
        <button className="todo-addBtn"><img src="/assets/images/icon-add.svg" alt="add-icon"/></button>
      </div>
    </form>
    </>
  );
};

export default EditTodo;
