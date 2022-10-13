const Saludar = () => alert("Hola!!!");

document.querySelector("#caja2").addEventListener("click", Saludar);

document.getElementById("caja3").onclick = () => Saludar();
