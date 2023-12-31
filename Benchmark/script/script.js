const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const answers = Array.from(document.getElementsByClassName("answers"));
const highlightAnswer = (event) => {
  const selectedAnswer = document.querySelector(".selected-answer");
  if (selectedAnswer) {
    selectedAnswer.classList.remove("selected-answer");
  }
  const answerButton = event.srcElement;
  const answerDiv = answerButton.parentElement.parentElement;
  useranswer = answerButton.innerText;
  answerDiv.classList.add("selected-answer");
};

answers.forEach((answer) => answer.children[0].addEventListener("click", highlightAnswer));

window.score = 0;
let questionNumber = 1;
let currentquestion = questions[questionNumber - 1];
let seconds = 60;
let useranswer = null;
const pie = document.getElementsByClassName("pie")[0];
let progressBar = 0;
const userAnswers = [];

window.onload = function () {
  setInterval(() => {
    const counter = document.querySelector(".counter span");
    counter.innerText = --seconds;
    if (seconds === 0) {
      nextQuestion(questions, currentquestion, null);
      seconds = 60;
      progressBar = 0;
      pie.style.setProperty("--p", progressBar);
      return;
    }
    progressBar += 100 / 60;
    pie.style.setProperty("--p", progressBar);
  }, 1000);
  const nextButton = document.getElementById("btn-next");

  nextButton.addEventListener("click", handleNext);
  populateText(currentquestion);
};

const handleNext = (event) => {
  nextQuestion(questions, currentquestion, event);
  seconds = 60;
};

const checkQuestion = (question) => {
  console.log(question);
  const correctAnswer = question.correct_answer;
  console.log(useranswer, correctAnswer);
  console.log("score", useranswer === correctAnswer);
  userAnswers.push(useranswer === correctAnswer);
  if (useranswer === correctAnswer) {
    score++;
  }
};

const nextQuestion = (questions, currentquestion, event) => {
  const selectedAnswer = document.querySelector(".selected-answer");
  if (selectedAnswer) {
    selectedAnswer.classList.remove("selected-answer");
  }
  console.log(currentquestion);

  checkQuestion(questions[questionNumber - 1]);
  questionNumber++;
  currentquestion = questions[questionNumber - 1];
  populateText(currentquestion);
  seconds = 60;
  progressBar = 0;
  pie.style.setProperty("--p", progressBar);
};

const populateText = (question) => {
  if (question === undefined) {
    window.location.href = window.location.origin + "/Results/results.html";
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }

  const h1 = document.querySelector("h1");
  h1.innerText = question.question;
  const questionP = document.querySelector(".questions-counter p");
  questionP.innerHTML = `QUESTION ${questionNumber} /<span> 10</span>`;

  const firstAnswer = document.querySelector(".answers p");
  const secondAnswer = document.querySelector(".answers:nth-of-type(2) p");
  const thirdAnswer = document.querySelector(".answers:nth-of-type(3) p");
  const fourthAnswer = document.querySelector(".answers:nth-of-type(4) p");

  if (question.type === "multiple") {
    firstAnswer.innerText = question.incorrect_answers[0];

    secondAnswer.innerText = question.incorrect_answers[1];

    thirdAnswer.innerText = question.incorrect_answers[2];
    thirdAnswer.parentElement.parentElement.style.display = "inline-block";

    fourthAnswer.innerText = question.correct_answer;
    fourthAnswer.parentElement.parentElement.style.display = "inline-block";
  } else {
    firstAnswer.innerText = "True";
    secondAnswer.innerText = "False";

    thirdAnswer.parentElement.parentElement.style.display = "none";
    fourthAnswer.parentElement.parentElement.style.display = "none";
  }

  console.log("score:", score);
};
