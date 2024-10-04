import React from "react";
import { useSearchParams } from "react-router-dom";
import { deleteTodo, getTodos } from "../utils/data";
import TodoList from "../components/TodoList";
import SearchBar from "../components/Searchbar";

function DashboardPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Dashboard defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteTodo(id);

    // update todo state from data.js
    this.setState(() => {
      return {
        todos: getTodos(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const todos = this.state.todos.filter((todo) => {
      return todo.todo.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordchange={this.onKeywordChangeHandler}
        />
        <h2>Todo List</h2>
        <TodoList todos={todos} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default DashboardPageWrapper;
