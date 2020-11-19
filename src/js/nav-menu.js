const btn = document.querySelector("#menu-navigation");
const menu = document.querySelector(".navigation");

btn.addEventListener("click", addClass);

function addClass() {
  menu.classList.toggle("active");
  //   window.addEventListener("click", closeMenu);
}

// function closeMenu({ target }) {
//   if (menu.classList.contains("active")) {
//     if (
//       target.nodeName !== "UL" &&
//       target.nodeName !== "LI" &&
//       target.nodeName !== "A"
//     ) {
//       menu.classList.remove("active");
//     }
//   }
// }
