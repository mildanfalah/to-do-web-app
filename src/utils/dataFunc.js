let todos = [
  {
    id: 1,
    todo: "This is your first to-do list",
    completed: true,
  },
  {
    id: 2,
    todo: "This is your second to-do list",
    completed: false,
  },
  {
    id: 3,
    todo: "This is your third to-do list",
    completed: false,
  },
];

function getTodos() {
  return todos;
}

function addTodo(todo) {
  todos = [...todos, { id: +new Date(), completed: false, ...todo }];
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}
