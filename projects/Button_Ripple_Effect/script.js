const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const top = e.target.offsetTop;
  const left = e.target.offsetLeft;
  //   const top = btn.getBoundingClientRect().top;
  //   const left = btn.getBoundingClientRect().left;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.top = e.clientY - top + "px";
  ripple.style.left = e.clientX - left + "px";

  btn.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 300);
});
