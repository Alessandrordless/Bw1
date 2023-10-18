// const star1 = document.getElementByClass("star");

const stars = Array.from(document.getElementsByClassName("star"));
console.log(stars);
const starContainer = document.querySelector(".star");

const highlightStars = (event) => {
  const selectedStar = event.srcElement;
  const nthStar = stars.indexOf(selectedStar);

  for (let i = 0; i <= nthStar; i++) {
    stars[i].classList.add("star");
    stars[i].style.filter = "brightness(3.5)";
  }
};

stars.forEach((star) => star.addEventListener("click", highlightStars));

const filteredElement = document.getElementsByClassName("star");

filteredElement.addEventListener("click", filteredElement);

filteredElement();

// const input = document.getElementsByTagName("input")[0];
// const button = document.getElementById("btn");

// button.disabled = true;

// input.addEventListener("change", () => {
//   button.toggleAttribute("disabled");
// });
