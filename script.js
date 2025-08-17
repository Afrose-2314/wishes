function generateWish() {
  const name = document.getElementById("teacherName").value.trim();
  const letter = document.getElementById("letter");
  const wishMessage = document.getElementById("wishMessage");

  if (name === "") {
    alert("Please enter your teacher's name 😊");
    return;
  }

  // Set the personalized message
  wishMessage.innerHTML = `Dear <b>${name}</b>,<br>
  Wishing you a very <b>Happy Teachers' Day</b>! 🌸📚<br>
  Thank you for inspiring and guiding us always.`;

  // Show and animate the letter
  letter.style.display = "block";
  setTimeout(() => {
    letter.classList.add("open");
  }, 100);
}
