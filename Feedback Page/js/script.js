// const star1 = document.getElementByClass("star");

const stars = Array.from(document.getElementsByClassName("star"));
console.log(stars);
const starContainer = document.querySelector(".star");
let nthStar;


const highlightStars = (event) => {
  event.preventDefault()
  const selectedStar = event.srcElement;
  nthStar = stars.indexOf(selectedStar)

  for (let i = 0; i <= nthStar; i++) {
    stars[i].classList.add("star");
    stars[i].style.filter = "brightness(3.5)";
  }
};



stars.forEach((star) => star.addEventListener("click", highlightStars));



// const filteredElement = document.getElementsByClassName("star");

// filteredElement.addEventListener("click", highlightStars);

// filteredElement();


const sendButton = document.getElementsByClassName("send-button")[0]
console.log(sendButton)

const changeText = function () {

const pText = document.querySelector(".just-p p") 


if (nthStar <= 5) {
pText.innerText = "Sorry that you didn't enjoy Epicode."
} else if (nthStar < 8) {
  pText.innerText = "Thank you for your feedback."
} else if (nthStar < 11 ) {
  pText.innerText = "We are glad you had a good experience."
}
}

sendButton.addEventListener("click", changeText)

