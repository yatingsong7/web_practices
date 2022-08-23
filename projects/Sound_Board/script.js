const sounds = document.querySelectorAll(".btn");

sounds.forEach((sound) => {
  sound.addEventListener("click", () => {
    var audios = document.querySelectorAll("audio");
    audios.forEach((a) => {
      a.pause();
      a.currentTime = 0;
    });
    var audio = document.getElementById(sound.innerText);

    audio.play();
  });
});
