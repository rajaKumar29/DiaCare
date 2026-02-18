const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
const toggle = document.getElementById("togglePass");
const password = document.getElementById("password");

/* Show / hide password */
toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "🙈";
  } else {
    password.type = "password";
    toggle.textContent = "👁";
  }
});

/* Fake login animation */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.style.color = "#38bdf8";
  msg.textContent = "Checking credentials...";

  setTimeout(() => {
    msg.style.color = "lightgreen";
    msg.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);

  }, 1200);
});
