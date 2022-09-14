const btnModal = document.querySelector(".btnModal");
const modalContainer = document.querySelector(".modal-container");
const btnSalir = document.querySelector(".btnExitModal");

btnModal.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
});

btnSalir.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});
