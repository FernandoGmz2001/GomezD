import { Longitud, Mayusculas } from "./modulo.js";

const btnProcesar = document.querySelector("#button");
const inputCadena = document.querySelector(".inputCadena");
const textToUpp = document.querySelector(".textToUpp");
const textLong = document.querySelector(".textLong");

btnProcesar.addEventListener("click", () => {
  let word = inputCadena.value;
  textToUpp.innerHTML = Mayusculas(word);
  textLong.innerHTML = Longitud(word);
});
