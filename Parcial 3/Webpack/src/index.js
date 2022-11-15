import Swal from "sweetalert2";

const btnAlerta = document.querySelector(".btnAlerta");

btnAlerta.addEventListener("click", () => {
  Swal.fire("Me hiciste click");
});
