import Typed from "typed.js";

let options = {
  //   strings: ["I am Nazar", "I am Junior Front-end Developer"],
  smartBackspace: true,
  typeSpeed: 40,
  stringsElement: "#typed-strings",
};

// const sectionRef = document.querySelector("section");
let typed = new Typed("#typed", options);
console.log(typed);
