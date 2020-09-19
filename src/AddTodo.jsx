import React, { useState } from "react";

const NamedInput = ({ name, value, onChange, isValid }) => {
  return (
    <input
      name={name}
      type="text"
      placeholder="new todo"
      value={value}
      onChange={onChange}
      style={{ borderColor: isValid ? "inHerit" : "red" }}
    />
  );
};

const AddTodo = ({ addTodo, addTodoThunk, newTodoText, dispatch }) => {
  const [newTodo, setNewTodo] = useState(newTodoText || "");

  const onChange = (event) => {
    event.preventDefault();
    let inputText = event.target.value;
    setNewTodo(inputText);
  };

  const onSubmitTodo = () => {
    addTodo(dispatch, newTodo);
    addTodoThunk(newTodo);
    setNewTodo("");
  };

  const isValid = !!newTodo;
  const validationText = isValid ? "valid" : "invalid";

  return (
    <>
      <form>
        <NamedInput
          name="new todo"
          value={newTodo}
          onChange={onChange}
          isValid={isValid}
        />
        <input type="button" value="AddTodo" onClick={onSubmitTodo} />
      </form>
      <label>{validationText}</label>
    </>
  );
};

export default AddTodo;
