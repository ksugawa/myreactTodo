import React from "react";

export const Todo = ({ todo, todos, setTodos, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
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
        <button className="icon-edit">
          <img src="/assets/images/icon-edit.svg" alt="edit-icon" />
        </button>
        <button onClick={handleClear} className="icon-delete">
          <img src="/assets/images/icon-delete.svg" alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
