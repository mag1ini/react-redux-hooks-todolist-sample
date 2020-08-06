import React from "react";

const TodoItem = ({ text, isActive }) => <li>{text}</li>;

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
