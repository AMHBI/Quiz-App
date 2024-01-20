import formatData from "./helper.js";
//Elements
const questionText = document.getElementById("question-text");
const questionAnswers = document.querySelectorAll(".answer-button");
const loader = document.getElementById("loader");
const gameContainer = document.getElementById("game-container");
//URL
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
//Variables
let formatedData = null;
let questionIndex = 0;
let correctAnswer = null;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  const data = await json.results;
  console.log(data);
  formatedData = formatData(data);
  start();
};

const start = () => {
  showQuestion();
  loader.style.display = "none";
  gameContainer.style.display = "block";
};

const showQuestion = () => {
  const { question, answers, correctAnswerIndex } = formatedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.innerText = question;
  questionAnswers.forEach((btn, index) => {
    btn.innerText = answers[index];
  });
};
const checkAnswer = (index, event) => {
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correctAnswer");
  } else {
    event.target.classList.add("inCorrectAnswer");
    questionAnswers[correctAnswer].classList.add("correctAnswer");
    questionAnswers.forEach((item, index2) => {
      index2 !== index?  item.setAttribute("disabled","") : null
      })
    };
};
window.addEventListener("load", fetchData);
questionAnswers.forEach((btn, index) => {
  btn.addEventListener("click", (event) => checkAnswer(index, event));
});
