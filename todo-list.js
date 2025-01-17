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

setInterval(currentDate, 0); // This runs the date

const createList = () => {
    // These statements creates the elements
    let todoContainer = document.createElement("div");
    let todoList = document.createElement("span");
    let checkbox = document.createElement("input");
    let checkmark = document.createElement("span");
    let todoText = document.createElement("p");
    let removeTodo = document.createElement("span");
    let removeTodoIcon = document.createElement("i");

    checkbox.type = "checkbox";
    todoText.innerHTML = input.value;

    // These statements styles the elements
    todoContainer.className = "todoContainer";
    todoList.className = "todoList";
    checkmark.className = "checkmark";
    todoText.className = "todoText";
    removeTodo.className = "removeTodo";
    removeTodoIcon.classList = "fa-solid fa-xmark";

    // This validates the input value & appends the list
    if(input.value.trim() !== "") {
        if(input.value.length <= 30) {
            container.appendChild(todoContainer);
            todoContainer.appendChild(todoList);
            todoContainer.appendChild(removeTodo);
            todoList.appendChild(checkbox);
            todoList.appendChild(checkmark);
            todoList.appendChild(todoText);
            removeTodo.appendChild(removeTodoIcon);
        }
        else {
            alert("Maximum number of 30 characters");
        }
    }
    else {
        alert("Please enter a task");
    }

    input.value = "";  // This clears the input value after creating a list

    checkbox.addEventListener('click', () => {
        if(checkbox.checked) {
            // These statements crosses a list when the checkbox is clicked
            todoText.style.textDecoration = "line-through";
            todoText.style.textDecorationColor = "#f00";
            todoText.style.color = "#888";
        }
        else {
            // These statements uncrosses a list when the checkbox is clicked
            todoText.style.textDecoration = "none";
            todoText.style.color = "#fff";
        }
    });

    removeTodo.addEventListener('click', () => {
        // This statement removes a list when clicked
        container.removeChild(todoContainer);
    });

}

addButton.addEventListener('click', createList);

input.addEventListener('keypress', (key) => {
    // This is executed when the user presses the 'Enter' key
    if(key.keyCode === 13) return createList();
})