import { useEffect, useState } from "react";
import "./ToDo.css";
import { Button } from "@mui/material";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const myTodoList = "myToDo";

const getMyTodList = () => {
  const initialValue = localStorage.getItem(myTodoList);
  if (!initialValue) return [];
  return JSON.parse(initialValue);
};
export const ToDo = () => {
  const [todoList, setTodoList] = useState(() => getMyTodList());
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (todoValue) => {
    const { id, content, checked } = todoValue;
    if (!content) return;

    if (todoList.includes(content)) {
      return;
    }

    const matchedTodo = todoList.find((item) => item.content === content);
    if (matchedTodo) return;

    setTodoList((prev) => [...prev, { id, content, checked }]);
  };

  localStorage.setItem(myTodoList, JSON.stringify(todoList));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteTodo = (itemValue) => {
    const updateToDo = todoList.filter((item) => item.content !== itemValue);

    setTodoList(updateToDo);
  };

  const handleCheckedTodo = (itemValue) => {
    const updateToDo = todoList.map((item) => {
      if (item.content === itemValue) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });

    setTodoList(updateToDo);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>TODO List</h1>
          <h2 className="date-time">{dateTime}</h2>
        </header>
        <ToDoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrdList">
          <ul>
            {todoList.map((item) => {
              return (
                <ToDoList
                  key={item.id}
                  item={item.content}
                  checked={item.checked}
                  onToDoDelete={handleDeleteTodo}
                  onTodoChecked={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </section>

        <section>
          <Button variant="contained" onClick={() => setTodoList([])}>
            Clear All
          </Button>
        </section>
      </section>
    </>
  );
};
