(function (document, window) {
  if (!document || !window) {
    return;
  }

  var styleText =
    "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";
  var unfocus_style = document.createElement("STYLE");

  window.unfocus = function () {
    document.getElementsByTagName("HEAD")[0].appendChild(unfocus_style);

    document.addEventListener("mousedown", function () {
      unfocus_style.innerHTML = styleText + "}";
    });
    document.addEventListener("keydown", function () {
      unfocus_style.innerHTML = "";
    });
  };

  unfocus.style = function (style) {
    styleText += style;
  };

  unfocus();
})(document, window);

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  circles[currentActive++].classList.add("active");
  prev.removeAttribute("disabled");
  toggleLine();

  if (currentActive == circles.length) {
    next.setAttribute("disabled", true);
  }
});

prev.addEventListener("click", () => {
  circles[--currentActive].classList.remove("active");
  next.disabled = false;
  toggleLine();

  if (currentActive == 1) {
    prev.setAttribute("disabled", true);
  }
});

function toggleLine() {
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
}
