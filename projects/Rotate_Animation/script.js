const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

close.addEventListener("click", () => {
  container.classList.remove("active");
});

open.addEventListener("click", () => {
  container.classList.add("active");
});
