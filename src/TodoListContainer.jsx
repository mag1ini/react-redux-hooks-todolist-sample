import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TodoListContainer extends React.Component {
  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
      </>
    );
  }
}

export default TodoListContainer;
