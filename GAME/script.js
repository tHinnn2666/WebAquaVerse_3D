// ==========================================
// 1. DOM ELEMENTS
// ==========================================
const startBtn = document.querySelector(".start-btn");
const preScreen = document.querySelector(".pre");
const game = document.querySelector(".game");
const targetHit = document.querySelector(".target-hit");
const targetPanel = document.querySelector(".target-panel");
const fishName = document.querySelector(".fish-name");
const infos = document.querySelectorAll(".info");
const progressText = document.querySelector(".progress-title span:last-child");
const progressBar = document.querySelector(".progress span");
const timerText = document.querySelector(".box p");
const crosshair = document.querySelector(".crosshair");
const aquarium = document.getElementById("aquarium");
const pauseBtn = document.querySelector(".pause");
const endScreen = document.querySelector(".end-screen");
const endBanner = document.querySelector(".end-banner");
const finalScore = document.querySelector(".final-score");
const finalTime = document.querySelector(".final-time");
const restartBtn = document.querySelector(".restart-btn");
const homeBtn = document.querySelector(".home-btn");
const backBtn = document.querySelector(".back");
const bubblesContainer = document.querySelector(".bubbles");

// ==========================================
// 2. GAME DATA & STATE VARIABLES
// ==========================================
const fishData = [
  { name: "Cá mập", image: "cá mập.png", info: ["🦈 Thân hình thoi", "🦷 Răng sắc", "⚡ Phát hiện điện trường"] },
  { name: "Cá ngừ", image: "cá ngừ.png", info: ["🐟 Sống theo đàn", "💨 Cơ thể thuôn dài", "🍣 Món ăn nổi tiếng"] },
  { name: "Cá mập voi", image: "cá mập voi.png", info: ["🐋 Bơi chậm", "🌍 Cá lớn nhất", "⚪ Có đốm trắng"] },
  { name: "Cá voi xanh", image: "cá voi xanh.png", info: ["🐳 Cực lớn", "🔵 Xanh xám", "⬜ Đầu chữ U"] },
  { name: "Cá voi sát thủ", image: "cá voi sát thủ.png", info: ["⚫⚪ Đen trắng", "👥 Sống theo đàn", "⭕ Đầu tròn"] },
  { name: "Cá đuối", image: "cá đuối.png", info: ["📀 Thân dẹt", "⬇️ Miệng dưới bụng", "🪢 Đuôi dài"] },
  { name: "Cá mập đầu búa", image: "cá đầu búa.png", info: ["🔨 Đầu hình búa", "😵 Xấu", "💨 Thủy động học"] },
  { name: "Rùa biển", image: "rùa xanh.png", info: ["📍 Bơi xa", "🦕 Đẻ trứng", "🛡️ Có chân bơi"] }
];

let currentFish = 0;
let time = 60;
let timer, fishSpawner, bubbleSpawner;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isMouseTicking = false; 

const activeFishes = new Set(); 

// ==========================================
// 3. CORE FUNCTIONS 
// ==========================================

function resetGameState() {
  clearInterval(timer);
  clearInterval(fishSpawner);
  clearInterval(bubbleSpawner);
  
  time = 60;
  currentFish = 0;
  timerText.textContent = "01:00";
  
  aquarium.innerHTML = '';
  bubblesContainer.innerHTML = '';
  activeFishes.clear();
}

function startTimer() {
  timerText.textContent = "01:00";
  timer = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    timerText.textContent = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (time <= 0) {
      clearInterval(timer);
      clearInterval(fishSpawner);
      showEndScreen("lose");
    }
  }, 1000);
}

function loadTarget() {
  if (currentFish >= fishData.length) return;
  
  const target = fishData[currentFish];
  fishName.textContent = target.name;
  infos[0].textContent = target.info[0];
  infos[1].textContent = target.info[1];
  infos[2].textContent = target.info[2];
  
  progressText.textContent = `${currentFish} / 8`;
  progressBar.style.width = `${(currentFish / 8) * 100}%`;
  
  spawnFish(); 
}

function spawnBubbles() {
  bubbleSpawner = setInterval(() => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * 100}vw`;
    
    const size = 10 + Math.random() * 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${4 + Math.random() * 5}s`;
    
    bubblesContainer.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
      bubble.remove();
    }, { once: true });
    
  }, 300);
}

function spawnFish() {
  // Đã nâng giới hạn lên 25 con để game cực kỳ sinh động
  if (activeFishes.size >= 25) return;

  const randomFish = fishData[Math.floor(Math.random() * fishData.length)];
  const fishEl = document.createElement("img");
  
  fishEl.src = randomFish.image;
  fishEl.classList.add("real-fish");
  fishEl.dataset.name = randomFish.name;
  fishEl.style.top = `${Math.random() * 75}vh`;

  let size = 180;
  if (randomFish.name === "Cá voi xanh") size = 400;
  else if (randomFish.name === "Cá mập voi") size = 320;
  else size = 160 + Math.random() * 220;
  
  fishEl.style.width = `${size}px`;

  // FIX LỖI BƠI CHẬM: Giảm thời lượng animation xuống (chỉ từ 4 đến 8 giây)
  const speed = 7 + Math.random() * 4.5; 

  // FIX LỖI ĐỘNG HỌC: Gán thẳng animation vào đây để tránh bị kẹt `infinite`
  if (Math.random() > 0.5) {
    fishEl.style.left = "110vw";
    fishEl.style.animation = `swimReverse ${speed}s linear forwards, floaty 2s ease-in-out infinite`;
  } else {
    fishEl.style.left = "-20vw"; // Tránh xuất hiện quá sâu ngoài lề
    fishEl.style.animation = `swim ${speed}s linear forwards, floaty 2s ease-in-out infinite`;
  }

  aquarium.appendChild(fishEl);
  activeFishes.add(fishEl); 

  // FIX LỖI CÁ KHÔNG CHỊU CHẾT: Dùng setTimeout để xóa cá chính xác khi nó bơi xong
  setTimeout(() => {
    if (fishEl.parentNode) {
      fishEl.remove();
      activeFishes.delete(fishEl);
    }
  }, speed * 1000);
}

function getFishUnderCrosshair() {
  let closestFish = null;
  let closestDistance = Infinity;

  activeFishes.forEach(fish => {
    const rect = fish.getBoundingClientRect();
    const fishCenterX = rect.left + rect.width / 2;
    const fishCenterY = rect.top + rect.height / 2;
    
    const distance = Math.hypot(mouseX - fishCenterX, mouseY - fishCenterY);

    if (distance < 120 && distance < closestDistance) {
      closestDistance = distance;
      closestFish = fish;
    }
  });

  return closestFish;
}

function showEndScreen(type) {
  endScreen.classList.remove("hide");
  finalScore.textContent = currentFish;
  finalTime.textContent = `${time}s`;

  if (type === "win") {
    endBanner.src = "congrats.png";
    window.parent.postMessage('game_completed', '*');
  } else {
    endBanner.src = "timeup.png";
  }
}

// ==========================================
// 4. EVENT LISTENERS
// ==========================================

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!isMouseTicking) {
    requestAnimationFrame(() => {
      crosshair.style.left = `${mouseX}px`;
      crosshair.style.top = `${mouseY}px`;
      isMouseTicking = false;
    });
    isMouseTicking = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;

  const hoveredFish = getFishUnderCrosshair();
  if (!hoveredFish) return;

  const clickedFish = hoveredFish.dataset.name;
  const target = fishData[currentFish];

  if (clickedFish === target.name) {
    targetHit.classList.remove("show");
    void targetHit.offsetWidth; 
    targetHit.classList.add("show");

    hoveredFish.style.transition = "transform 0.3s";
    hoveredFish.style.transform = "scale(0)";
    
    setTimeout(() => {
      if (hoveredFish.parentNode) hoveredFish.remove();
      activeFishes.delete(hoveredFish);
    }, 300);

    currentFish++;

    if (currentFish >= 8) {
      clearInterval(timer);
      clearInterval(fishSpawner);
      setTimeout(() => showEndScreen("win"), 300);
      return;
    }

    setTimeout(loadTarget, 300);

  } else {
    hoveredFish.style.filter = "brightness(0.3)";
    setTimeout(() => {
      if(activeFishes.has(hoveredFish)) hoveredFish.style.filter = "";
    }, 300);
  }
});

startBtn.addEventListener("click", () => {
  preScreen.style.display = "none";
  game.style.display = "block";
  
  resetGameState();
  loadTarget();
  spawnBubbles();
  startTimer();
  fishSpawner = setInterval(spawnFish, 350); // Cho cá ra liên tục hơn một chút
});

backBtn.addEventListener("click", () => {
  if (!confirm("Đừng thoát mòooo 😭")) return;
  resetGameState();
  game.style.display = "none";
  preScreen.style.display = "flex";
});

homeBtn.addEventListener("click", () => {
  endScreen.classList.add("hide");
  resetGameState();
  game.style.display = "none";
  preScreen.style.display = "flex";
});

restartBtn.addEventListener("click", () => {
  endScreen.classList.add("hide");
  game.style.display = "block";
  
  resetGameState();
  loadTarget();
  spawnBubbles();
  startTimer();
  fishSpawner = setInterval(spawnFish, 350);
});