const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".container");

fill.addEventListener("dragstart", dragstart_handler);

function dragstart_handler(ev) {
  this.className += " cover";
}

function dragover_handler(ev) {
  ev.preventDefault();
}

function drop_handler(ev) {
  ev.preventDefault();
  this.append(fill);
  this.className = "container";
}

function dragenter_handler(ev) {
  ev.preventDefault();
  this.className += " hovered";
}

function dragleave_handler() {
  this.className = "container";
}

fill.addEventListener("dragend", (ev) => {
  ev.preventDefault();
  fill.className = "fill";
});

for (const e of empties) {
  e.addEventListener("dragover", dragover_handler);
  e.addEventListener("dragenter", dragenter_handler);
  e.addEventListener("dragleave", dragleave_handler);
  e.addEventListener("drop", drop_handler);
}
