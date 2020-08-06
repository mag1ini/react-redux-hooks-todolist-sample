import actionTypes from "./actionTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    default:
      return state;
  }
};

export default todoReducer;
