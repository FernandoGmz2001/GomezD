const contenedor = document.querySelector("#cont");
const btnRequest = document.querySelector(".btnRequest");
const btnReset = document.querySelector(".btnReset");
const caja1 = document.querySelector("#caja1");

contenedor.addEventListener("click", (e) => {
  e.target.classList.toggle("darkMode");
});

// ! Manera de hacerlo con JQUERY
$(".btnRequest").click(function () {
  $.ajax({
    url: "CambioDeTexto.txt",
    success: (result) => {
      $("#caja1").html(result);
    },
  });
});

$(".btnReset").click(function () {
  $("#caja1").html("Caja 1");
});

// ! Manera de hacerlo con Javascript Vanilla
// btnRequest.addEventListener("click", () => {
//   var solicitud = new XMLHttpRequest();

//   solicitud.onreadystatechange = () => {
//     if (solicitud.readyState == 4 && solicitud.status == 200) {
//       caja1.innerHTML = solicitud.responseText;
//     }
//   };

//   solicitud.open("GET", "CambioDeTexto.txt", true);
//   solicitud.send();
// });

// btnReset.addEventListener("click", () => (caja1.innerHTML = "Caja 1"));
