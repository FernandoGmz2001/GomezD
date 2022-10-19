const contenedor = document.querySelector("#cont");

contenedor.addEventListener("click", (e) => {
  e.target.classList.toggle("darkMode");
});

$(document).ready(function () {
  $("#cont").click(function (e) {
    console.log(e.target);
    $(e.target).html("Evento delegacion");
  });
});
