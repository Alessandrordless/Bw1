const answers = document.getElementsByClassName("answers");
const highlightAnswer = (event) => {
  console.log(event);
  const answerButton = event.srcElement;
  const answerDiv = answerButton.parentElement.parentElement;
  answerDiv.classList.add("selected-answer");
  if (answerDiv.classList.includes("selected-answer")) {
    answerDiv.classList.remove("selected-answer");
  } else {
    answerDiv.classList.add("selected-answer");
  }
};

Array.from(answers).forEach((answer) => answer.children[0].addEventListener("click", highlightAnswer));

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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
window.onload = function () {
  window.score = 0;
  window.currentquestion = questions[0];
  window.questionNumber = 1
  window.seconds = 60;
  setInterval(() => {
    const counter = document.querySelector(".counter span");
    counter.innerText = --seconds;
    if (seconds === 0) {
      nextQuestion(questions, currentquestion, null);
      seconds = 60;
    }
  }, 1000);
  const nextButton = document.getElementById("btn-next")

  nextButton.addEventListener("click", handleNext);
  populateText(currentquestion);
};

const checkQuestion = (question, useranswer) => {
  const correctAnswer = question.correct_answer;
  if (useranswer === correctAnswer) {
    score += 1;
  }
};
const populateText = (question) => {
  const h1 = document.querySelector("h1");
  h1.innerText = question.question;
  const questionP = document.querySelector(".questions-counter p");
  questionP.innerHTML = `QUESTION ${questionNumber} /<span> 10</span>`;
  const firstAnswer = document.querySelector(".answers p");
  firstAnswer.innerText = question.incorrect_answers[0];
  const secondAnswer = document.querySelector(".answers:nth-of-type(2) p");
  secondAnswer.innerText = question.incorrect_answers[1];
  const thirdAnswer = document.querySelector(".answers:nth-of-type(3) p");
  thirdAnswer.innerText = question.incorrect_answers[2];
  const fourthAnswer = document.querySelector(".answers:nth-of-type(4) p");
  fourthAnswer.innerText = question.correct_answer;

};

const handleNext = (event) => {
  nextQuestion(questions, currentquestion, event);
  seconds = 60;
};

const nextQuestion = (questions, currentquestion, event) => {
  if (event !== null) {
    checkQuestion(currentquestion, event.srcElement.innerText);
  }
  questionNumber++;
  populateText(questions[questions.indexOf(currentquestion) + 1]);
};

const questionTimeOut = () => {};

