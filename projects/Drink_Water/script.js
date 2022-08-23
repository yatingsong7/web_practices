const remainLiter = document.getElementById("remain-liter");
const cups = document.querySelectorAll(".cup");
const remain = document.querySelector(".remain");
const drank = document.querySelector(".drank");

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    toggleCups(idx);
    changeCup();
  });
});

function toggleCups(idxClick) {
  if (idxClick === 7 && cups[idxClick].classList.contains("active")) {
    idxClick--;
  }

  if (
    cups[idxClick].classList.contains("active") &&
    !cups[idxClick + 1].classList.contains("active")
  ) {
    idxClick--;
  }

  cups.forEach((cup, idx) => {
    if (idx <= idxClick) {
      cup.classList.add("active");
    } else {
      cup.classList.remove("active");
    }
  });
}

function changeCup() {
  const liters = document.querySelectorAll(".cup.active").length;
  const remained = 2 - liters * 0.25;
  const remainPercent = 100 - ((liters * 0.25) / 2) * 100 + "%";
  const drankPercent = ((liters * 0.25) / 2) * 100 + "%";

  if (remained === 0) {
    remain.style.visibility = "hidden";
  } else {
    remain.style.visibility = "visible";
    remainLiter.innerText = remained + "L";
  }

  remain.style.setProperty("height", remainPercent);

  drank.innerText = drankPercent === "0%" ? "" : drankPercent;
  drank.style.setProperty("height", drankPercent);
}
