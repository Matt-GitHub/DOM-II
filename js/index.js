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
const double = document.querySelector(".nav a");
double.addEventListener("dblclick", () => {
  double.style.color = "purple";
  double.classList.toggle;
});
