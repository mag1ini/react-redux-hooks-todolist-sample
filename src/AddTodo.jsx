import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  onChange = event => {
    event.preventDefault();
    let inputText = event.target.value;
    this.setState({ newTodo: inputText });
  };

  onSubmitTodo = () => {
    const { newTodo } = this.state;
    const { addTodo } = this.props;
    addTodo(newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    const { newTodo } = this.state;
    const isValid = newTodo ? "valid" : "invalid";

    return (
      <form>
        <label>{isValid}</label>
        <input
          type="text"
          name="newTodo"
          placeholder="new todo"
          value={newTodo}
          onChange={this.onChange}
        />
        <input type="button" value="AddTodo" onClick={this.onSubmitTodo} />
      </form>
    );
  }
}

export default AddTodo;
