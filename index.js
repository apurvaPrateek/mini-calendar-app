let date = document.querySelector(".date");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let today = new Date();

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.addEventListener("DOMContentLoaded", ()=>{
    date.innerHTML = today.getDate();
    day.innerHTML = week[today.getDay()-1];
    month.innerHTML = months[today.getMonth()-1];
    year.innerHTML = today.getFullYear();
})