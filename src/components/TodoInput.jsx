import React from "react";
import PropTypes from "prop-types";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      todo: "",
    };

    this.onTodoChangeEventHandler = this.onTodoChangeEventHandler.bind(this);
    this.onSubmitEventhandler = this.onSubmitEventhandler.bind(this);
  }

  onTodoChangeEventHandler(event) {
    this.setState(() => {
      return {
        todo: event.target.value,
      };
    });
  }

  onSubmitEventhandler(event) {
    event.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <form className="todo-input" onSubmit={this.onSubmitEventhandler}>
        <input
          type="text"
          placeholder="Create new list"
          value={this.state.todo}
          onChange={this.onTodoChangeEventHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
