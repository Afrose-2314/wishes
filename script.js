// script.js

function showWishes() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const messageBox = document.getElementById("wishMessage");
  const envelope = document.querySelector(".letter");

  if (nameInput === "") {
    alert("Please enter your name before continuing.");
    return;
  }

  // Wish message with love from Coding Club
  const wishes = `
    🌸 Happy Teachers' Day, ${nameInput}! 🌸  
    <br><br>
    "A teacher takes a hand, opens a mind, and touches a heart forever." 💡  
    <br><br>
    Thank you dear teachers for your guidance, wisdom, and endless patience.  
    <br><br>
    ❤️ With love from Coding Club 💖
  `;

  // Show message in paper (inside envelope)
  messageBox.innerHTML = wishes;

  // Open the envelope animation
  envelope.classList.add("open");
}
