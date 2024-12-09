import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./ToDo.css";

const ToDoList = ({ item, onToDoDelete, checked, onTodoChecked }) => {
  const handleDeleteTodo = (item) => {
    onToDoDelete(item);
  };

  return (
    <>
      <li className="todo-item">
        <span className={checked ? "checklist" : "notChecklist"}>{item}</span>
        <button className="btn btn-primary" onClick={() => onTodoChecked(item)}>
          <MdCheck />
        </button>
        <button onClick={() => handleDeleteTodo(item)}>
          <MdDeleteForever className="btn btn-danger" />
        </button>
      </li>
    </>
  );
};

export default ToDoList;
