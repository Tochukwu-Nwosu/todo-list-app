let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let day = document.querySelector("#day");
let container = document.querySelector(".container");
let input = document.querySelector("input");
let addButton = document.querySelector("button");

const currentDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let now = new Date();
    date.innerHTML = now.getDate();
    month.innerHTML = months[now.getMonth()];
    year.innerHTML = now.getFullYear();
    day.innerHTML = days[now.getDay()]
}

setInterval(currentDate, 0);

input.placeholder = "What do you want to do";

addButton.addEventListener('click', () => {
    let todoContainer = document.createElement("div");
    let todoList = document.createElement("span");
    let checkbox = document.createElement("input");
    let checkmark = document.createElement("span");
    let todoText = document.createElement("p");
    let removeTodo = document.createElement("span");
    let removeTodoIcon = document.createElement("i");

    todoContainer.className = "todoContainer";
    todoList.className = "todoList";
    checkmark.className = "checkmark";
    todoText.className = "todoText";
    removeTodo.className = "removeTodo";
    removeTodoIcon.classList = "fa-solid fa-xmark";

    checkbox.type = "checkbox";
    todoText.innerHTML = input.value;

    container.appendChild(todoContainer);
    todoContainer.appendChild(todoList);
    todoContainer.appendChild(removeTodo);
    todoList.appendChild(checkbox);
    todoList.appendChild(checkmark);
    todoList.appendChild(todoText);
    removeTodo.appendChild(removeTodoIcon);

    input.value = "";
});