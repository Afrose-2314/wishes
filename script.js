const quotes = [
  "A teacher plants the seeds of knowledge that grow forever.",
  "Happy Teacher's Day! Your guidance lights our path.",
  "To the world, you may be just a teacher, but to your students, you are a hero.",
  "Good teachers create good students. Thank you for inspiring us always!",
  "Happy Teacher’s Day! Your hard work and dedication make the future brighter."
];

function generateWish() {
  const name = document.getElementById("teacherName").value;
  const letter = document.getElementById("letter");
  const letterContent = document.getElementById("letterContent");

  if (name.trim() === "") {
    alert("Please enter teacher's name");
    return;
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  letterContent.innerHTML = `Dear <span style="color:#ffeb3b;">${name}</span>,<br><br>${randomQuote}`;
  
  letter.style.display = "block";
}
