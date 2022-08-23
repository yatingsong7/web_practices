const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  circles[currentActive++].classList.add("active");
  prev.removeAttribute("disabled");
  toggleLine();

  if (currentActive == circles.length) {
    next.setAttribute("disabled", true);
  }
});

prev.addEventListener("click", () => {
  circles[--currentActive].classList.remove("active");
  next.disabled = false;
  toggleLine();

  if (currentActive == 1) {
    prev.setAttribute("disabled", true);
  }
});

function toggleLine() {
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
}
