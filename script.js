// Login redirect
function goToWishes() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    window.location.href = "index.html";
  }
  return false;
}

// Wishes data
const wishes = [
  "Happy Teachers' Day! 🌸 Your wisdom lights our path.",
  "To the best guide and mentor – Thank you for everything 🙏",
  "A teacher takes a hand, opens a mind, and touches a heart ❤️",
  "Teaching is the greatest act of optimism 🌟",
  "Happy Teachers’ Day! We are forever grateful to you 📚"
];

// On wishes page load
window.onload = function () {
  const name = localStorage.getItem("username");
  if (document.getElementById("wishText")) {
    document.getElementById("wishText").innerText =
      "Dear " + name + ",\n" + wishes[Math.floor(Math.random() * wishes.length)];
  }
};

// Envelope open animation
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  if (!envelope.classList.contains("open")) {
    envelope.classList.add("open");
  }
}
