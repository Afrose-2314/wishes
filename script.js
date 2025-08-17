document.addEventListener("DOMContentLoaded", () => {
  const displayUser = document.getElementById("displayUser");
  if (displayUser) {
    let userName = localStorage.getItem("userName") || "Friend";
    displayUser.textContent = userName;
  }

  const wishBtn = document.getElementById("wishBtn");
  if (wishBtn) {
    wishBtn.addEventListener("click", () => {
      const teacherName = document.getElementById("teacherName").value.trim();
      if (teacherName) {
        const message = `Happy Teachers' Day, dear ${teacherName}! 🎉 With love from ${localStorage.getItem("userName")}`;
        document.getElementById("wishMessage").innerText = message;
        document.getElementById("letter").classList.add("open");
      } else {
        alert("Please enter your teacher's name!");
      }
    });
  }
});
