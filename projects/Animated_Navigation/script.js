const btn = document.querySelector(".btn-group");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
