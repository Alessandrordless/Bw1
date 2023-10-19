const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
const nrWrongAnswers = userAnswers.filter((userAnswer) => userAnswer === false).length;
let rightAnswers = userAnswers.length - nrWrongAnswers; 

const pie= document.querySelector(".pie");
pie.style.setProperty("--p", nrWrongAnswers * 10);

console.log(nrWrongAnswers);

const wrongText = document.querySelector(".grade:nth-of-type(3) span")
wrongText.innerText = `${nrWrongAnswers * 10}.0%`;

const rightText = document.querySelector(".grade:nth-of-type(1) span")
rightText.innerText = `${rightAnswers * 10}.0%`

const answersScore = document.querySelector(".grade:nth-of-type(1) p");
answersScore.innerText = `${rightAnswers}/${userAnswers.length} questions`;

const wrongScore = document.querySelector(".grade:nth-of-type(3) p");
wrongScore.innerText = `${nrWrongAnswers}/${userAnswers.length} questions`


if (rightAnswers < 6) {
  const failed1 = document.querySelector(".pie p:nth-of-type(1)"); 
  failed1.innerText = "Oh no!";
  const failed2 = document.querySelector(".pie p:nth-of-type(2)"); 
  failed2.innerText = "You failed the exam.";
  const failed3 = document.querySelector(".pie p:nth-of-type(3)"); 
  failed3.innerText = "You'll do better next time. Nice try!";
}

