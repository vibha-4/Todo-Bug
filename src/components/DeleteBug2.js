// DeleteBug2.js
import React, { useState } from "react";

// Intentional bug: Deleting the wrong item
const DeleteBug2 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Example Todo 1" },
    { id: 2, text: "Example Todo 2" },
    { id: 3, text: "Example Todo 3" },
  ]);

  const deleteTodo = (idToDelete) => {
    // Intentional bug: Deleting the item based on incorrect index
    // This will delete the item with the index equal to idToDelete
    // instead of deleting the item with the matching id
    setTodos(todos.filter((todo, index) => index !== idToDelete));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteBug2;
