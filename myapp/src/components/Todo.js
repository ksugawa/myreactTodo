import React from "react";

export const Todo = ({ todo, todos, setTodos, onDelete }) => {
  const handleTodoClick = () => {
    setTodos(todo.id);
  };

  const handleClear = (id) => {
    setTodos(todos.filter((todo) => todo.id !==id));
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
      <div className="icons">
        <button 
          className="icon-edit"
          >
          <img src="/assets/images/icon-edit.svg" alt="edit-icon" />
        </button>
        <button 
          onClick={() => handleClear(todo.id)} 
          className="icon-delete"
        >
          <img src="/assets/images/icon-delete.svg" alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
