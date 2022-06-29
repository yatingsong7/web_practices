const container = document.querySelector(".container");
window.addEventListener("keypress", (e) => {
  container.innerHTML = `

      <div class="content">
        <p>event.key</p>
        <div>${e.key === " " ? "Space" : e.key}</div>
      </div>
      <div class="content">
        <p>event.keyCode</p>
        <div>${e.keyCode}</div>
      </div>
      <div class="content">
        <p>event.code</p>
        <div>${e.code}</div>
      </div>
`;
});
