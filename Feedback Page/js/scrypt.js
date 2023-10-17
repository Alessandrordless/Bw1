// const star1 = document.getElementByClass("star");

const stars = Array.from(document.getElementsByTagName("i"));
console.log(stars);
const starContainer = document.querySelector(".stars");

const highlightStars = (event) => {
  const selectedStar = event.srcElement;
  const nthStar = stars.indexOf(selectedStar);
  stars.forEach((star) => star.remove());

  for (let i = 0; i <= nthStar; i++) {
    const img = document.createElement("img");
    img.src = "../Welcome/Images/star.svg";
    img.classList.add("star");
    starContainer.appendChild(img);
  }

  for (let i = 0; i < 10 - nthStar - 1; i++) {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-star", "star");
    starContainer.appendChild(i);
  }
};

stars.forEach((star) => star.addEventListener("click", highlightStars));
