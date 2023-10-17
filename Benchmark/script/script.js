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
