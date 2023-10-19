const userAnswers = [true, true, true, true, true, false, false, false, false, false];

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


