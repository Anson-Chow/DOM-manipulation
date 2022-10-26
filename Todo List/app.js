const list = document.querySelector(".list");
const input = document.querySelector('input')

let todoList = [];
let todoInputValue = "";
let counter = 0;

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  if (!todoInputValue) {
    return;
  }
  const task = {
    id: counter++,
    task: todoInputValue,
  };
  todoList.push(task);
  renderTodos();
  input.value = "";
  todoInputValue = "";
}
  

function deleteTodo(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  renderTodos();
}

function renderTodos() {
  list.innerHTML = todoList
    .map(
      (elem) =>
        `<li>
           ${elem.task}
              <button class="todo__delete" onclick="deleteTodo(${elem.id})">
                  x
              </button>
          </li>`
    )
    .join("");
}

// renderTodos(); Don't need this on mount
