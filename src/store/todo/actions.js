import actionTypes from "./actionTypes";
import { PostTodo } from "../../services/todo";

export const addTodoAC = (todo) => ({
  type: actionTypes.ADD_TODO,
  todo: todo.title
});

// export const createTodo1 = async (dispatch, todo) => {
//   try {
//     const response = await PostTodo(todo);

//     dispatch(addTodoAC(response));
//   } catch (e) {
//     //this.props.addTodo(todo)
//   }
// };

export function createTodo(todo) {
  return async function (dispatch) {
    try {
      const response = await PostTodo(todo);

      dispatch(addTodoAC(response));
    } catch (e) {
      //this.props.addTodo(todo)
    }
  };
}
