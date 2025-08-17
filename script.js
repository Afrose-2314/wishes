// Utility: deterministic "random" by hashing name → stable quote per teacher
function hashString(str) {
  let h = 2166136261 >>> 0; // FNV-1a base
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const quotes = [
  // Crisp, heartfelt, varied
  "You don’t just teach the syllabus—you teach us how to think, build, and dream. Happy Teachers’ Day!",
  "Your class feels like a compass: it points us to purpose and possibility. Thank you, and Happy Teachers’ Day!",
  "The best debugger is a great teacher. You spot our errors and still believe in our output. Respect!",
  "You turned confusion into curiosity and effort into excellence. Wishing you a lovely Teachers’ Day!",
  "Your guidance is the shortcut we all needed—but with all the learning intact. Happy Teachers’ Day!",
  "Behind every confident student, there’s a teacher who never gave up. That’s you. Thank you!",
  "You grade our work—but you upgrade our lives. Happy Teachers’ Day!",
  "A good teacher explains. A great teacher inspires. You do both—daily. Happy Teachers’ Day!",
  "From ‘why’ to ‘wow’—you make that journey possible. Wishing you a joyful Teachers’ Day!",
  "You turned our ‘syntax errors’ into life lessons. Grateful always. Happy Teachers’ Day!"
];

const nameEl = document.getElementById("nameInput");
const wishBtn = document.getElementById("wishBtn");
const resetBtn = document.getElementById("resetBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const toName = document.getElementById("toName");
const quoteText = document.getElementById("quoteText");
const today = document.getElementById("today");

// Set today's date (Asia/Kolkata users)
(function setDate() {
  const d = new Date();
  const opts = { year: "numeric", month: "short", day: "2-digit" };
  today.textContent = d.toLocaleDateString("en-IN", opts);
})();

// Confetti
function launchConfetti() {
  // Remove existing
  document.querySelectorAll(".confetti").forEach(n => n.remove());
  const wrap = document.createElement("div");
  wrap.className = "confetti";
  const count = 80;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "piece";
    const left = Math.random() * 100;
    const dur = 2 + Math.random() * 2.5;
    const delay = Math.random() * 0.7;
    const scale = 0.6 + Math.random() * 0.9;
    p.style.left = left + "vw";
    p.style.animationDuration = dur + "s";
    p.style.animationDelay = delay + "s";
    p.style.transform = `scale(${scale})`;
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  // Clean up
  setTimeout(() => wrap.remove(), 5000);
}

function openMailAnimation() {
  // Trigger flap + letter animation
  envelope.classList.add("open");
  // slight reflow to restart if needed
  letter.classList.remove("open");
  void letter.offsetWidth;
  letter.classList.add("open");
}

function makeWish() {
  const name = (nameEl.value || "").trim();
  if (!name) {
    nameEl.focus();
    nameEl.classList.add("shake");
    setTimeout(() => nameEl.classList.remove("shake"), 600);
    return;
  }

  // Personalize
  toName.textContent = `Dear ${name},`;

  // Deterministic pick
  const index = hashString(name.toLowerCase()) % quotes.length;
  quoteText.textContent = quotes[index];

  // Animate
  openMailAnimation();
  launchConfetti();
}

wishBtn.addEventListener("click", makeWish);
nameEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") makeWish();
});

resetBtn.addEventListener("click", () => {
  envelope.classList.remove("open");
  letter.classList.remove("open");
  quoteText.textContent = "";
  toName.textContent = "Dear Teacher,";
  nameEl.value = "";
  nameEl.focus();
});

// Small input shake effect (inline CSS via class)
const style = document.createElement("style");
style.textContent = `
  .shake{animation:shake .35s ease}
  @keyframes shake{10%,90%{transform:translateX(-1px)}
  20%,80%{transform:translateX(2px)}
  30%,50%,70%{transform:translateX(-4px)}
  40%,60%{transform:translateX(4px)}}
`;
document.head.appendChild(style);
