const header = document.querySelector("header");

setTimeout(() => {
  header.classList.add("active");
}, 3500);

const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-icon");
const backdropN = document.querySelector(".backdrop-n");
const closeBtnN = document.querySelector(".close-icon-n");

setTimeout(removeClass, 30000);
setTimeout(removeClassN, 60000);

function removeClass() {
  backdrop.classList.remove("is-hidden");
  window.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModalBtn);
}

function closeModalBtn() {
  backdrop.classList.add("is-hidden");
}

function closeModal({ target }) {
  if (target.classList.value === "backdrop") {
    backdrop.classList.add("is-hidden");
  }
}

function removeClassN() {
  backdropN.classList.remove("is-hidden");
  window.addEventListener("click", closeModalN);
  closeBtnN.addEventListener("click", closeModalBtnN);
}
function closeModalN({ target }) {
  if (target.classList.value === "backdrop-n") {
    backdropN.classList.add("is-hidden");
  }
}
function closeModalBtnN() {
  backdropN.classList.add("is-hidden");
}
