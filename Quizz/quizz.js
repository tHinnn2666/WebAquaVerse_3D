const startScreen = document.querySelector(".start-screen");
const quiz = document.querySelector(".quiz");
const endScreen = document.querySelector(".end-screen");

const startBtn = document.querySelector(".start");
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");
const restartBtn = document.querySelector(".restart");

const questionEl = document.querySelector(".question");
const answersWrapper = document.querySelector(".answer-wrapper");
const currentEl = document.querySelector(".current");
const totalEl = document.querySelector(".total");

const finalScoreEl = document.querySelector(".final-score");
const totalScoreEl = document.querySelector(".total-score");

const numSelect = document.getElementById("numQuestion");

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let currentQuestions = [];
let timer;
let timeLeft = 15;
let answered = false;

// BUBBLE
const bubbleContainer = document.querySelector(".bubbles");

function createBubble() {
  const bubble = document.createElement("span");

  const size = Math.random() * 20 + 10; 
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 6;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = left + "%";
  bubble.style.animationDuration = duration + "s";

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

// spawn liên tục
setInterval(createBubble, 300); // càng nhỏ càng nhiều bọt 😏
// START
startBtn.addEventListener("click", () => {

  const num = parseInt(numSelect.value);

  const found = questions.find(
    q => q.numQuestion === num
  );

  if (!found) {
    alert("Không có bộ câu hỏi 😭");
    return;
  }

  currentQuestions = shuffle(found.questions);

  startScreen.classList.add("hide");
  quiz.classList.remove("hide");

  totalEl.textContent = "/" + currentQuestions.length;

  currentQuestionIndex = 0;
  score = 0;

  loadQuestion();
});

// LOAD
function loadQuestion() {
  resetState();

  const q = currentQuestions[currentQuestionIndex];

  questionEl.textContent = q.question;
  currentEl.textContent = currentQuestionIndex + 1;

  nextBtn.style.display = "none";
  submitBtn.style.display = "none";

  q.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("answer");

    div.innerHTML = `
      <span class="text">${option}</span>
      <span class="checkbox"><span class="icon">✓</span></span>
    `;

    div.addEventListener("click", () => selectAnswer(div, option));
    answersWrapper.appendChild(div);
  });

  startTimer();
}

// SELECT
function selectAnswer(el, value) {

  if (answered) return;
  answered = true;
  clearInterval(timer);
  selectedAnswer = value;

  const correct = currentQuestions[currentQuestionIndex].answer;

  document.querySelectorAll(".answer").forEach(a => {
    const text = a.querySelector(".text").textContent;
    const icon = a.querySelector(".icon");

    if (text === correct) {
      a.classList.add("correct");
      if (icon) icon.textContent = "✔";
    } 
    else if (text === value) {
      a.classList.add("wrong");
      if (icon) icon.textContent = "✖";
    }
  });

  if (value === correct) score++;
  if (currentQuestionIndex === currentQuestions.length - 1) {
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
  }
}

// NEXT
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  loadQuestion();
});

// SUBMIT
submitBtn.addEventListener("click", () => {
  showResult();
});

// TIMER
function startTimer() {
  clearInterval(timer);
  answered = false;
  timeLeft = 15;

  // reset ngay
  progressBar.style.transition = "none";
  progressBar.style.width = "100%";
  progressBar.offsetHeight;

// bật transition lại sau khi reset xong
setTimeout(() => {
  progressBar.style.transition = "width 1s linear";
}, 10);

updateTimer();

  // tụt NGAY lập tức
  timer = setInterval(() => {
    if (answered) {
      clearInterval(timer);
      return;
    }

    timeLeft--;

    updateTimer();

    if (timeLeft <= 0) {

      clearInterval(timer);

      autoReveal();

      setTimeout(() => {

        if (currentQuestionIndex === currentQuestions.length - 1) {

          showResult();

        } else {

          currentQuestionIndex++;

          loadQuestion();

        }

      }, 300);

    }

  }, 950);

}


function updateTimer() {
  
  progressText.textContent = timeLeft;

  const percent = (timeLeft / 15) * 100;

  progressBar.style.width = percent + "%";
  
}

// hết giờ hiện đáp án
function autoReveal() {
  const correct = currentQuestions[currentQuestionIndex].answer;

  document.querySelectorAll(".answer").forEach(a => {
    const text = a.querySelector(".text").textContent;
    if (text === correct) a.classList.add("correct");
  });
}

// RESULT
function showResult() {
  clearInterval(timer);

  quiz.classList.add("hide");
  endScreen.classList.remove("hide");

  finalScoreEl.textContent = score;
  totalScoreEl.textContent = "/" + currentQuestions.length;
}

// RESET
function resetState() {
  selectedAnswer = null;
  answered = false;
  answersWrapper.innerHTML = "";
}

// RESTART
restartBtn.addEventListener("click", () => {
  endScreen.classList.add("hide");
  startScreen.classList.remove("hide");
});

// SHUFFLE
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}