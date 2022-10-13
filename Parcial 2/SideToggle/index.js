const btnToggle = document.querySelector("#toggle");
const sidebar = document.querySelector("#sidebar");

btnToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("unhide");
  if (sidebar.classList.contains("hidden")) {
    btnToggle.classList.add("bxs-toggle-left");
    btnToggle.classList.remove("bxs-toggle-right");
  } else {
    btnToggle.classList.remove("bxs-toggle-left");
    btnToggle.classList.add("bxs-toggle-right");
  }
  // sidebar.classList.contains("hidden")
  //   ? btnToggle.classList.add("bxs-toggle-left")
  //   : btnToggle.classList.remove("bxs-toggle-right")
  //   ? btnToggle.classList.remove("bxs-toggle-left")
  //   : btnToggle.classList.add("bxs-toggle-right");
});
