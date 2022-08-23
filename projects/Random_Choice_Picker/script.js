const choices = document.getElementById("choices");
const choicesContainer = document.querySelector(".choice-container");

choices.focus();

choices.addEventListener("keyup", (event) => {
  createChoice(event.target.value);

  if (event.key === "Enter") {
    event.target.value = "";
    randomSelect();
  }
});

function createChoice(word) {
  const words = word
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((item) => item.trim());

  choicesContainer.innerHTML = "";
  words.forEach((word) => {
    const newChoice = document.createElement("span");
    newChoice.innerText = word;
    choicesContainer.appendChild(newChoice);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    const item = select();
    addClass(item);

    setTimeout(() => {
      removeClass(item);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const item = select();
      addClass(item);
    }, 100);
  }, 1000);
}

function removeClass(item) {
  item.classList.remove("active");
}

function addClass(item) {
  item.classList.add("active");
}

function select() {
  const allChoices = document.querySelectorAll("span");
  const num = Math.floor(Math.random() * allChoices.length);
  const item = document.querySelector(
    ".choice-container :nth-child(" + (num + 1) + ")"
  );
  return item;
}
