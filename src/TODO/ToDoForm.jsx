import { useState } from "react";

const ToDoForm = ({ onAddTodo }) => {
  const [todoValue, setTodoValue] = useState({});

  const handleFieldChange = (value) => {
    setTodoValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(todoValue);
    setTodoValue({ id: "", content: "", checked: false });
  };
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            // className="todo-input"
            autoComplete="off"
            value={todoValue.content}
            onChange={(e) => handleFieldChange(e.target.value)}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <button type="submit">Add TODO</button>
        </div>
      </form>
    </section>
  );
};

export default ToDoForm;
