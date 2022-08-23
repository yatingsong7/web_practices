const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", display);

display();

function display() {
  const triggerPoint = (window.innerHeight / 3) * 2;

  boxes.forEach((box) => {
    const height = box.getBoundingClientRect().top;

    if (height < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
