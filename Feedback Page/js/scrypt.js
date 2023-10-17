const star1 = document.getElementByClass("star");
const star2 = document.getElementByClass("star");
star1.addEventListener("click", function (event) {
  changeColor("blue");
});
star2.addEventListener("click", function (event) {
  changeColor("green");
});
