import React from "react";
import TodoStatus from "./TodoStatus";

const TodoItem = ({ text, isActive }) => (
  <li>
    <label>{text}</label>
    <TodoStatus />
  </li>
);

const TodoList = ({ items }) =>
  items && items.length ? (
    <ul>
      {items.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  ) : (
    <div>Not items yet!</div>
  );

export default TodoList;
