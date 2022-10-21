const time = document.getElementById("time");
const month = document.getElementById("month");
const date = document.getElementById("date");
const btn = document.getElementById("modebtn");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

btn.addEventListener("click", () => {
  var root = document.getElementsByTagName("html")[0];
  if (!root.classList.contains("dark")) {
    root.className += "dark";
    btn.innerText = "Light mode";
  } else {
    root.classList.remove("dark");
    btn.innerText = "Dark mode";
  }
});

function getDateTime() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = new Date();
  const weekDay = days[day.getDay()];
  var m = months[day.getMonth()];

  month.innerText = weekDay + ", " + m;
  date.innerText = day.getDate();

  var hour = day.getHours();
  var ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  var minute = day.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  var second = day.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;

  time.innerText = hour + ":" + minute + " " + ampm;
}

setInterval(() => {
  getDateTime();
}, 1000);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
