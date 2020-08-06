import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  items: state.todo.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoList);
