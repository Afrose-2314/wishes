document.addEventListener("DOMContentLoaded", () => {
  const teacherNameInput = document.getElementById("teacherName");
  const createBtn = document.getElementById("createBtn");
  const resetBtn = document.getElementById("resetBtn");
  const wishPopup = document.getElementById("wishPopup");
  const wTeacher = document.getElementById("w-teacher");
  const closePopup = document.getElementById("closePopup");

  // Create Wish
  createBtn.addEventListener("click", () => {
    const tName = teacherNameInput.value.trim();
    if (tName) {
      wTeacher.textContent = tName; // Insert teacher’s name
      wishPopup.classList.remove("hidden"); // Show popup
    } else {
      alert("Please enter your teacher's name 🙏");
    }
  });

  // Reset Input
  resetBtn.addEventListener("click", () => {
    teacherNameInput.value = "";
    wishPopup.classList.add("hidden");
  });

  // Close Popup
  closePopup.addEventListener("click", () => {
    wishPopup.classList.add("hidden");
  });
});
