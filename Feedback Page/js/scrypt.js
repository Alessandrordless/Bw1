// const star1 = document.getElementByClass("star");

const stars = Array.from(document.getElementsByTagName("i"));
console.log(stars);
const starContainer = document.querySelector(".stars");

const highlightStars = (event) => {
  const selectedStar = event.srcElement;
  const nthStar = stars.indexOf(selectedStar);

  for (let i = 0; i <= nthStar; i++) {
    stars[i].classList.add("stars-on");
  }
};

stars.forEach((star) => star.addEventListener("click", highlightStars));
