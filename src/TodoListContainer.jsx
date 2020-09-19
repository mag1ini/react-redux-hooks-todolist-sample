import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodoAC, createTodo, createTodoThunk } from "./store/todo/actions";
import { connect } from "react-redux";

class TodoListContainer extends React.Component {
  render() {
    const { items, newTodoText } = this.props;
    const { addTodo, dispatch, createTodoThunk } = this.props;

    return (
      <>
        <AddTodo
          addTodo={createTodo}
          addTodoThunk={createTodoThunk}
          dispatch={dispatch}
          newTodoText={newTodoText}
        />
        <TodoList items={items} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.todo.todos
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAC(todo)),
  //createTodo: (todo) => dispatch(createTodo(todo)),
  createTodoThunk: (todo) => dispatch(createTodoThunk(todo)),
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
