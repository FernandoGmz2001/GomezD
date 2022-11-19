const btnConfirmar = document.querySelector(".btnConfirmar");
const formulario = document.querySelector(".formulario");

btnConfirmar.addEventListener("click", async (e) => {
  console.log("Hola");
  let respuesta = await fetch("configuracion.php");
  let dato = await respuesta.json();
  document.getElementById("nombre").value = reg.Nombre;
  document.getElementById("apellidoPaterno").value = reg.ApellidoMaterno;
  document.getElementById("apellidoMaterno").value = reg.ApellidoPaterno;
  document.getElementById("emailInput").value = reg.Correo;
  document.getElementById("ciudadInput").value = reg.Ciudad;
  document.getElementById("estadoInput").value = reg.Estado;
  document.getElementById("direccionInput").value = reg.Direccion;
  document.getElementById("telefonoInput").value = reg.Telefono;
  document.getElementById("inputPass").value = reg.Password;
  document.getElementById("confirmPassInput").value = reg.ConfirmPass;

  window.alert("Se pudo realizar el registro exitosamente");
});
