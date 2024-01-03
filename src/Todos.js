import { useState } from "react";
import "./style.css";

function generateId() {
  return Math.floor(Math.random() * 1000);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handdleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
    
      <div className="container">
      <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />

        <button onClick={handdleSubmit}>Submit</button>

        <table className="todos-list">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({ text, id }) => (
              <tr key={id} className="todo">
                <td>{text}</td>
                <td>
                  <button className="close" onClick={() => removeTodo(id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Todo;
