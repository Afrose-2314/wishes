// -------- Login (name only) --------
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value.trim();
      if (!user) { alert("Please enter your name"); return; }
      localStorage.setItem("wishes_user", user);
      window.location.href = "index.html";
    });
  }

  // -------- Index page wiring --------
  const helloUser = document.getElementById("helloUser");
  const logoutBtn = document.getElementById("logoutBtn");

  if (helloUser) {
    const user = localStorage.getItem("wishes_user") || "Student";
    helloUser.textContent = `Hi, ${user}!`;
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("wishes_user");
      window.location.href = "login.html";
    });

    // Buttons
    document.getElementById("createBtn").addEventListener("click", createWish);
    document.getElementById("resetBtn").addEventListener("click", resetWish);
    document.getElementById("closePopup").addEventListener("click", () =>
      document.getElementById("wishPopup").classList.add("hidden")
    );
  }
});

// -------- Wish logic --------
function createWish() {
  const tName = document.getElementById("teacherName").value.trim();
  if (!tName) { alert("Please enter teacher's name"); return; }

  const user = localStorage.getItem("wishes_user") || "A Student";

  // Fill lines
  document.getElementById("w-teacher").textContent = tName;
  document.getElementById("w-student").textContent = user;

  // Show popup
  const popup = document.getElementById("wishPopup");
  popup.classList.remove("hidden");
}

function resetWish() {
  document.getElementById("teacherName").value = "";
  document.getElementById("wishPopup").classList.add("hidden");
}
