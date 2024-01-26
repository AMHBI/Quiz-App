const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreEle = document.getElementById("score");
const saveButton = document.querySelector("button");
const input = document.querySelector("input");

scoreEle.innerText = score ? score : "0";

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScore = {
      name: input.value,
      score,
    };
    highScores.push(finalScore)
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(10)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score")
    window.location.assign("/src/")
  }
};
saveButton.addEventListener("click", saveHandler);
