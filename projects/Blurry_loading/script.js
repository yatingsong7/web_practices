const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let loadpercent = 0;

let start = setInterval(blurring, 30);
function blurring() {
  loadpercent++;
  if (loadpercent > 99) {
    clearInterval(start);
  }

  bg.style.filter = `blur(${scale(loadpercent, 0, 100, 70, 0)}px)`;
  loadText.innerText = `${loadpercent}%`;
  loadText.style.opacity = scale(loadpercent, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
