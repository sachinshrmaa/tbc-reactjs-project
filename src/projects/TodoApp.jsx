import { useState } from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoApp = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    setInputVal(event.target.value);
  };

  const handleSubmit = () => {
    if (inputVal !== " ") {
      setTodos([...todos, inputVal]);
      setInputVal("");
    }
  };

  console.log(inputVal);
  console.log(todos);

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        className="todo-input"
        value={inputVal}
        onChange={handleInput}
      />

      <button onClick={handleSubmit} className="add-btn">
        Add Todo
      </button>

      {/* <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul> */}

      <Todo todos={todos} />
    </div>
  );
};

export default TodoApp;
