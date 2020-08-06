import actionTypes from "./actionTypes";

export const addTodoAC = todo => ({
  type: actionTypes.ADD_TODO,
  todo
});
