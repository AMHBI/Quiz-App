import formatData from "./helper.js";
//Elements
const questionText = document.getElementById("question-text");
const questionAnswers = document.querySelectorAll(".answer-button");
const loader = document.getElementById("loader");
const gameContainer = document.getElementById("game-container");
const scoreText = document.getElementById("score");
const questionNumText = document.getElementById("question-number");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
//URL
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
//Variables
const CORRECT_BONOUS = 10;
let formatedData = null;
let questionIndex = 0;
let correctAnswer = null;
let isAcceptable = true;
let score = 0;

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
  if (!isAcceptable) return;
  isAcceptable = false;
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correctAnswer");
    score += CORRECT_BONOUS;
    scoreText.innerText = score;
  } else {
    event.target.classList.add("inCorrectAnswer");
    questionAnswers[correctAnswer].classList.add("correctAnswer");
  }
};
const classRemover = () => {
  questionAnswers.forEach((btn) => {
    btn.className = "answer-button";
  });
};
const nextHandler = () => {
  questionIndex++;
  if (questionIndex < formatedData.length) {
    showQuestion();
    classRemover();
    isAcceptable = true
    questionNumText.innerText = !!questionIndex ? questionIndex+1 : questionIndex+2;
  } else {
  finishHandler()
  }
};
const finishHandler = ()=>{
  localStorage.setItem("score",JSON.stringify(score))
  window.location.assign("./end.html")
}
window.addEventListener("load", fetchData);
questionAnswers.forEach((btn, index) => {
  btn.addEventListener("click", (event) => checkAnswer(index, event));
});
nextBtn.addEventListener("click", nextHandler);
finishBtn.addEventListener("click",finishHandler)