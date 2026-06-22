const words = [
  {
    word: "學習",
    answer: "học tập"
  },
  {
    word: "工作",
    answer: "công việc"
  },
  {
    word: "家庭",
    answer: "gia đình"
  },
  {
    word: "朋友",
    answer: "bạn bè"
  }
];

let currentIndex = 0;

const wordElement = document.getElementById("word");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

function showWord() {
  wordElement.textContent = words[currentIndex].word;
  answerInput.value = "";
  message.textContent = "";
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = words[currentIndex].answer.toLowerCase();
    
  if (userAnswer === correctAnswer) {
    message.textContent = "答對了！";
    message.style.color = "green";

    currentIndex++;

    if (currentIndex >= words.length) {
      currentIndex = 0;
    }

    setTimeout(showWord, 800);
  } else {
    message.textContent = "答錯了，再試一次";
    message.style.color = "red";
  }
}

checkBtn.addEventListener("click", checkAnswer);

answerInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

showWord();