// script.js

// When page loads, show logged in user
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("helloUser").textContent = `👋 Hello, ${username}`;
  }

  // logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "login.html";
    });
  }

  // create wish button
  const createBtn = document.getElementById("createBtn");
  const resetBtn = document.getElementById("resetBtn");
  const teacherNameInput = document.getElementById("teacherName");
  const wishPopup = document.getElementById("wishPopup");
  const closePopup = document.getElementById("closePopup");
  const wTeacher = document.getElementById("w-teacher");

  if (createBtn) {
    createBtn.addEventListener("click", () => {
      const tName = teacherNameInput.value.trim();
      if (tName === "") {
        alert("Please enter your teacher's name 🙏");
        return;
      }
      wTeacher.textContent = tName;
      wishPopup.classList.remove("hidden");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      teacherNameInput.value = "";
    });
  }

  if (closePopup) {
    closePopup.addEventListener("click", () => {
      wishPopup.classList.add("hidden");
    });
  }
});
