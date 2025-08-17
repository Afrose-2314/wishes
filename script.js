document.getElementById("wishBtn").addEventListener("click", () => {
  const name = document.getElementById("teacherName").value.trim();
  const letter = document.getElementById("letter");
  const wishMessage = document.getElementById("wishMessage");

  if (name) {
    wishMessage.innerHTML = `Happy Teachers' Day, <b>${name}</b>! 🌸<br>
    Thank you for inspiring, guiding, and shaping our future with your wisdom. 🙏💖`;
    letter.style.display = "block";
  } else {
    alert("Please enter your teacher's name.");
  }
});

// Quotes Rotation
const quotes = [
  `"The art of teaching is the art of assisting discovery." – Mark Van Doren`,
  `"A good teacher can inspire hope, ignite imagination, and instill a love of learning." – Brad Henry`,
  `"It is the supreme art of the teacher to awaken joy in creative expression and knowledge." – Albert Einstein`,
  `"Teachers plant the seeds of knowledge that grow forever."`,
  `"The influence of a great teacher can never be erased."`
];

let quoteIndex = 0;
setInterval(() => {
  document.getElementById("quoteText").textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}, 4000);
