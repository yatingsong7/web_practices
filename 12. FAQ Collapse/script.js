const btns = document.querySelectorAll(".show-answer");
// const

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});
