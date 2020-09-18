import React from "react";
import "./styles.css";
import TodoListContainer from "./TodoListContainer";
import { useParams } from "react-router";

const TodoPage = (props) => {
  let { newTodoText } = useParams();
  return (
    <div className="App">
      <TodoListContainer newTodoText={newTodoText} />
    </div>
  );
};

export default TodoPage;
