// TypoBug.js
import React from "react";

// Intentional bug: Typo in variable name
const TypoBug = () => {
  const todos = [{ id: 1, text: "Example Todo" }];
  return (
    <div>
      <h2>Todo List</h2>
      {/* Bug: Incorrect variable name */}
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TypoBug;
