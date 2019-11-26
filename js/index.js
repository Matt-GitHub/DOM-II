// Your code goes here

// ! Mouse Over
const mouseOver = document.querySelector(".intro img");
// mouse over
mouseOver.addEventListener("mouseover", () => {
  mouseOver.style.border = "2px solid black";
});
// mouse leave
mouseOver.addEventListener("mouseleave", () => {
  mouseOver.style.border = "none";
});

// ****** END OF MOUSE OVER **********

// ? Key Down
// const keyDown = documente.querySelector(".intro h2");
// keyDown.addEventListener("keydown", logKey => {
//   function logKey() {
//     alert("Stop Messing Around on Here");
//   }
// });

// ! Wheel
// const wheel = document.querySelector(".img-content img");
// wheel.onwheel = "zoom";

// ! drag / drop

// ! load

// !Focus

// ******* Resize
window.addEventListener("resize", () => {
  alert("put me back to my intended size");
});
// ********* end of resize *****************************

// ! scroll

// ! Select

// !dblclick
const double = document.querySelector(".main-navigation");
double.addEventListener("dblclick", () => {
  double.style.color = "purple";
  double.classList.toggle;
});
