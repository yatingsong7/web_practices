const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", () => {
  left.classList.add("get-hover");
  right.classList.add("no-hover");
});
left.addEventListener("mouseleave", () => {
  left.classList.remove("get-hover");
  right.classList.remove("no-hover");
});

right.addEventListener("mouseover", () => {
  right.classList.add("get-hover");
  left.classList.add("no-hover");
});
right.addEventListener("mouseleave", () => {
  right.classList.remove("get-hover");
  left.classList.remove("no-hover");
});
