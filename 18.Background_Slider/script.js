const imgs = document.querySelectorAll(".img");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const body = document.body;

let count = 0;
setBg();

leftBtn.addEventListener("click", () => {
  imgs[count].classList.remove("active");
  count--;
  if (count < 0) {
    count = imgs.length - 1;
  }
  setBg();
  imgs[count].classList.add("active");
});

rightBtn.addEventListener("click", () => {
  imgs[count].classList.remove("active");
  count++;
  if (count > imgs.length - 1) {
    count = 0;
  }
  setBg();
  imgs[count].classList.add("active");
});

function setBg() {
  body.style.backgroundImage = imgs[count].style.backgroundImage;
}
