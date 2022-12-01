const btnConfirmar = document.querySelector(".btnConfirmar");
const formulario = document.querySelector(".formulario");

btnConfirmar.addEventListener("click", async (e) => {
  e.preventDefault();
  const datosFormulario = new FormData(document.querySelector(".formulario"));
  let respuesta = await fetch("./connect.php", {
    method: "POST",
    body: datosFormulario,
  });
  let data = await respuesta.json();
  console.log(data);
  document.querySelector("#nombre").value = data.Nombre;
  document.querySelector("#apellidoPaterno").value = data.ApellidoMaterno;
  document.querySelector("#apellidoMaterno").value = data.ApellidoPaterno;
  document.querySelector("#emailInput").value = data.Correo;
  document.querySelector("#ciudadInput").value = data.Ciudad;
  document.querySelector("#estadoInput").value = data.Estado;
  document.querySelector("#direccionInput").value = data.Direccion;
  document.querySelector("#telefonoInput").value = data.Telefono;
  document.querySelector("#inputPass").value = data.Password;
  document.querySelector("#confirmPassInput").value = data.ConfirmPass;
});
