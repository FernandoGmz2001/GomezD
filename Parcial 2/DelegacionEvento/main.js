const contenedor = document.querySelector("#cont");

contenedor.addEventListener("click", (e) => {
  e.target.classList.toggle("darkMode");
});

$(document).ready(function () {
  $("#cont").click(function (e) {
    // alert("se escucho el click en la libreria Jquery");
    console.log(e.target);
    // console.log("Me hiciste click");
    $(e.target).html("Evento delegacion");
  });
});

// window.onload = () => {
//   document
//     .querySelector("#cont")
//     .addEventListener("click", () => console.log(e.target));
// };
