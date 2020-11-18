const input = document.querySelector("#form-search");
const block = document.querySelector(".search-block");

input.addEventListener("click", addClass);

function addClass() {
  block.classList.toggle("active");
}

window.addEventListener("click", removeClass);

function removeClass({ target }) {
  if (
    target.nodeName !== "INPUT" &&
    target.nodeName !== "UL" &&
    target.nodeName !== "LI" &&
    target.nodeName !== "IMG"
  ) {
    block.classList.remove("active");
  }
}
const code = "6f8cc0ca89b99c68d152beb4338bc465";
