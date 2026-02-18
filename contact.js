const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all fields!";
    return;
  }

  // Success message
  successMsg.style.color = "green";
  successMsg.textContent = "Message sent successfully!";

  // Clear form
  form.reset();
});
