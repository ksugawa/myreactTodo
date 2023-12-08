import React from "react";

const Todo = ({ todo, toggleTodo, onDelete }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleClear = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        onChange={handleTodoClick}
      />
      <label className="todo-checkbox">{todo.name}</label>
      <div>
        <button 
          className="icon-edit"
          >
          <img src="/assets/images/icon-edit.svg" alt="edit-icon" />
        </button>
        <button 
          onClick={handleClear} 
          className="icon-delete"
        >
          <img src="/assets/images/icon-delete.svg" alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
