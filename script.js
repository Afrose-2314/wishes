document.getElementById("wishBtn").addEventListener("click", function () {
  const teacherName = document.getElementById("teacherName").value.trim();
  const letter = document.getElementById("letter");
  const wishMessage = document.getElementById("wishMessage");

  if (teacherName === "") {
    alert("Please enter your teacher's name!");
    return;
  }

  // Create personalized wish
  wishMessage.innerHTML = `Dear <b>${teacherName}</b>,<br>
    Wishing you a very <span style="color:#ffcc00;">Happy Teachers' Day!</span> 🎉<br>
    Thank you for your guidance and support. 💐`;

  // Show letter animation
  letter.classList.add("show");
});
