const joke = document.getElementById("joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (joke.innerText = data.joke));
}
