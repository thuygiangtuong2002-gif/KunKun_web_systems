/* 題庫 
要做單字測驗，單字測驗就是給使用者原文，使用者要寫正確翻譯
所以要有:"原文"、"答案"
*/


//words是一個陣列，裡面包著物件。words是一個題庫
//words[0]叫做第一題，我知道裡面是物件我就知道怎麼得到它了，words[0].word就是拿到"學習"這個字！
const words = [
  /*
  JavaScript 的物件 {} 很像 Python 的字典 dict。都是key 對應 value
  
  const wordItem = {
    word: "學習",
    answer: "học tập"
  };

  word和answer不是變數名字！是屬性名稱，屬性名稱不需要先定義，但自己要保持命名一致。一打錯，
  JS 只會給undefined，他不會事先警告
  */ 
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
const account = document.getElementById("account")
const password = document.getElementById("password")


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