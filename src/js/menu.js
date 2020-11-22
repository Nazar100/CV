const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-ic");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", addClass);
close.addEventListener("click", removeClass);

function addClass() {
  nav.classList.add("active");
  menu.classList.add("active");
  close.classList.add("active");
}
function removeClass() {
  nav.classList.remove("active");
  menu.classList.remove("active");
  close.classList.remove("active");
}
