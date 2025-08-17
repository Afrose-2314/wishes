// Handle Login
function login() {
  const name = document.getElementById("userName").value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    window.location.href = "index.html";
  } else {
    alert("Please enter your name!");
  }
}

// Quotes for Teachers
const quotes = [
  "A teacher takes a hand, opens a mind, and touches a heart.",
  "Teaching is the profession that teaches all other professions.",
  "Good teachers inspire hope, ignite the imagination, and instill a love of learning.",
  "A great teacher is like a candle—it consumes itself to light the way for others.",
  "Teachers plant seeds of knowledge that grow forever."
];

// Show Wish with Name
window.onload = function () {
  if (document.getElementById("wishText")) {
    const name = localStorage.getItem("userName") || "Dear Teacher";
    document.getElementById("wishText").innerText =
      `Happy Teachers' Day, ${name}! 🎉`;
    document.querySelector(".quote").innerText =
      quotes[Math.floor(Math.random() * quotes.length)];
  }
};

// Envelope Animation
function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
}
