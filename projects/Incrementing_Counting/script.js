const counts = document.querySelectorAll(".count");

counts.forEach((count) => {
  const dataTarget = count.getAttribute("data-target");
  count.innerText = "0";

  const countSpeed = Math.ceil(dataTarget / 200);

  let start = 0;
  const startCount = setInterval(() => {
    start += countSpeed;
    count.innerText = start;
    if (start >= dataTarget) {
      clearInterval(startCount);
      count.innerText = dataTarget;
    }
  }, 0.1);
});
