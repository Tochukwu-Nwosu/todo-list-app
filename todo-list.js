let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let day = document.querySelector("#day");

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