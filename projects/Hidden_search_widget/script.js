const input = document.getElementById("search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  input.classList.toggle("active");
});
