import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodoAC } from "./store/todo/actions";
import { connect } from "react-redux";

class TodoListContainer extends React.Component {
  render() {
    const { addTodo, items } = this.props;
    return (
      <>
        <AddTodo addTodo={addTodo} />
        <TodoList items={items} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.todo.todos
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAC(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
