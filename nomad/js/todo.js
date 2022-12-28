const TodoForm = document.getElementById("Todo-Form");
const TodoList = document.getElementById("Todo-List");
const TodoInput = TodoForm.querySelector("input");
let Todos = [];
const TODOS_KEY = "Todos";

function SaveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}
function DeleteToDO(event) {
    const li = event.target.parentElement;
    li.remove();
    Todos = Todos.filter((Todo) => Todo.id !== parseInt(li.id));
    SaveToDos();
}

function PaintToDo(NewToDo) {
    const li = document.createElement("li");
    li.id = NewToDo.id;
    const span = document.createElement("span");
    span.innerText = NewToDo.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", DeleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}

function HandleToDoSubmit(event) {
    event.preventDefault();
    const NewTodo = TodoInput.value;
    TodoInput.value = "";
    const NewTodoObj = {
        text: NewTodo,
        id: Date.now(),
    };
    Todos.push(NewTodoObj);
    PaintToDo(NewTodoObj);
    SaveToDos();
}

TodoForm.addEventListener("submit", HandleToDoSubmit);

function SayHello(item) {
    console.log("this is the turn of", item);
}
const SavedTodos = localStorage.getItem(TODOS_KEY);

if (SavedTodos) {
    const ParsedTodos = JSON.parse(SavedTodos);
    Todos = ParsedTodos;
    ParsedTodos.forEach(PaintToDo);
}