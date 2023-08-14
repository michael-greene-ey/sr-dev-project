import React, { useState, useEffect } from "react";
import styles from "./ToDoListPage.module.css";
import { TODOLIST } from "../assests/Constants";
import { ListInterface } from "../interfaces/ListInterface";
import ToDoForm from "../components/Form";
import ToDoList from "../components/ToDoList";

const ToDoListPage = () => {
  const [inputTextState, setInputTextState] = useState("");
  const [listState, setListState] = useState<ListInterface[]>([]);

  useEffect(() => {
    fetchData();
  }, [listState]);

  const fetchData = async function () {
    try {
      const res = await fetch(TODOLIST);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();

      setListState([...data]);
    } catch (error) {
      error instanceof Error
        ? console.log("An error occurred:", error.message)
        : console.log("Unknown Failure", error);
    }
  };

  return (
    <div className="toDoList">
      <header>
        <h1>To-Do List</h1>
        <ToDoForm
          inputText={inputTextState}
          setInputText={setInputTextState}
          list={listState}
          setList={setListState}
        ></ToDoForm>
      </header>
      <ToDoList list={listState}></ToDoList>
    </div>
  );
};

export default ToDoListPage;
