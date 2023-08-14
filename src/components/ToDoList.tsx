import React, { useState, useEffect } from "react";
import styles from "./ToDoList.module.css";
import { ToDoListPropsInterface } from "../interfaces/ToDoListPropsInterface";
import { ListInterface } from "../interfaces/ListInterface";

const ToDoList = ({ list }: ToDoListPropsInterface) => {
  return (
    <div className={styles.toDoContainer}>
      <ul className={styles.toDoList}>
        {list.map((item: ListInterface) => {
          return (
            <li key={item.id}>
              {item.completed ? (
                <input type="checkbox" />
              ) : (
                <input type="checkbox" />
              )}
              {item.actionItem}
              <button>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
