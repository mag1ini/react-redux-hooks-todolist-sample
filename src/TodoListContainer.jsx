import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodoAC, createTodo } from "./store/todo/actions";
import { connect } from "react-redux";

class TodoListContainer extends React.Component {
  render() {
    const { items, newTodoText } = this.props;
    const { addTodo, dispatch } = this.props;

    return (
      <>
        <AddTodo
          addTodo={createTodo}
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
  createTodo: (todo) => dispatch(createTodo(todo)),
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
