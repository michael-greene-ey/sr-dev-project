import React, { useEffect } from "react";
import styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TODOLIST } from "../assests/Constants";

const ToDoForm = ({ inputText, setInputText, list }: any) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addToDoHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(TODOLIST, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "food",
          actionItem: inputText,
          id: Math.random() * 1000,
          completed: false,
        }),
      });
    } catch (error) {
      error instanceof Error
        ? console.log("An error occurred:", error.message)
        : console.log("Unknown Failure", error);
    }

    setInputText("");
  };

  return (
    <form className={styles.form} onSubmit={addToDoHandler}>
      <input
        className={styles.toDoInput}
        type="text"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className={styles.toDoButton}>
        <i> Add</i>
      </button>
      <div className="select">
        <select className="filter-todo" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not complete">Not Complete</option>
        </select>
      </div>
    </form>
  );
};

export default ToDoForm;
