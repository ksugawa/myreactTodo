import React from "react";

export const TodoRest = ({ todos }) => {
  const todoRests = todos.filter((todo) => !todo.completed).length;
  
  return (
    <div className="todo-rest">
    残りのタスク: {todoRests}
    </div>
  );
}

export default TodoRest;
