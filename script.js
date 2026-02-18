const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const icon = toggleBtn.querySelector("i");

  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
/* ===== Scroll Reveal for Steps & Features ===== */

const revealItems = document.querySelectorAll(".step, .feature");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;

      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 150); // stagger animation

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 },
);

revealItems.forEach((item) => revealObserver.observe(item));
/* ================= SCROLL REVEAL ANIMATION (GLOBAL) ================= */

document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(
    ".step, .feature, .fade-left, .fade-right",
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120); // smooth stagger

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
});
document.addEventListener("DOMContentLoaded", function () {
  const chatToggle = document.getElementById("chat-toggle");
  const chatbot = document.getElementById("chatbot");
  const chatClose = document.getElementById("chat-close");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  // Open Chat
  chatToggle.addEventListener("click", () => {
    chatbot.classList.toggle("show");
  });

  // Close Chat
  chatClose.addEventListener("click", () => {
    chatbot.classList.remove("show");
  });

  // Send message
  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Bot reply
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.classList.add("bot-message");
      botMsg.textContent = getBotReply(msg);
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
  }

  chatSend.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  // Bot logic
  function getBotReply(message) {
    message = message.toLowerCase();
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("good morning") ||
      message.includes("good afternoon")
    )
      return "Hello! I'm your DiaCare assistant. How can I help you today?";
    else if(
        message.includes("what is the good blood sugar level") ||
      message.includes("good blood sugar level") ||
      message.includes("healthy blood sugar level") ||
      message.includes("good blood")
    )
    return "a good target blood sugar range is 80–130 mg/dL (4.4–7.2 mmol/L) before meals and less than 180 mg/dL (10.0 mmol/L) two hours after a meal.";
    if (message.includes("thanks") || message.includes("thank you"))
      return "You're welcome! Stay healthy 😊";
    if (message.includes("okay") || message.includes("ok"))
      return "Anything else😊";
    if (message.includes("thanks") || message.includes("thank you"))
      return "You're welcome! Stay healthy 😊";
    
    else if (
      message.includes("blood sugar") ||
      message.includes("glucose") ||
      message.includes("sugar level")
    )
      return "You can use our Blood Sugar Calculator to estimate your levels based on meals, insulin, and activity.";
    else if (
      message.includes("carbs") ||
      message.includes("meal") ||
      message.includes("food") ||
      message.includes("diet")
    )
      return "Would you like me to calculate your carbohydrate intake and its effect on your blood sugar?";
    else if (
      message.includes("exercise") ||
      message.includes("workout") ||
      message.includes("physical activity") ||
      message.includes("walk") ||
      message.includes("run")
    )
      return "Moderate exercise usually lowers blood sugar by 50–100 mg/dL per hour. Timing after meals helps too!";
    else if (
      message.includes("insulin") ||
      message.includes("medication") ||
      message.includes("dose") ||
      message.includes("meds") ||
      message.includes("tablet")
    )
      return "Insulin and medication significantly affect blood sugar. I can estimate their effect based on your dose.";
    else if (
      message.includes("stress") ||
      message.includes("anxiety") ||
      message.includes("emotions") ||
      message.includes("nervous")
    )
      return "Stress can increase your blood sugar by 10–60 mg/dL. Try relaxation or our Stress Calculator for guidance.";
    else if (
      message.includes("sleep") ||
      message.includes("routine") ||
      message.includes("habit") ||
      message.includes("lifestyle")
    )
      return "Poor sleep or irregular routines can raise your blood sugar. Aim for 7–9 hours per night!";
    else if (
      message.includes("hormone") ||
      message.includes("menstruation") ||
      message.includes("pregnancy") ||
      message.includes("menopause")
    )
      return "Hormonal changes can affect blood sugar. Tracking cycles helps predict fluctuations.";
    else if (
      message.includes("illness") ||
      message.includes("infection") ||
      message.includes("surgery") ||
      message.includes("fever")
    )
      return "Illness or infection can spike your blood sugar. Include any recent health issues in your tracking.";
    else if (
      message.includes("alcohol") ||
      message.includes("drink") ||
      message.includes("dehydration")
    )
      return "Alcohol and dehydration can affect blood sugar. Mild dehydration can increase sugar by 5–15 mg/dL.";
    else if (
      message.includes("tips") ||
      message.includes("advice") ||
      message.includes("help") ||
      message.includes("guidance")
    )
      return "I can provide tips for diet, exercise, stress management, and blood sugar tracking. Just ask!";
    else if (message.includes("thanks") || message.includes("thank you"))
      return "You're welcome! Stay healthy 😊";
    else if (
      message.includes("how are you") ||
      message.includes("kaise ho") ||
      message.includes("what about you") ||
      message.includes("your health")
    )
    return "I am good and here to keep you healthy";
    else if(
         message.includes("how can you help me") ||
      message.includes("how can i predict my blood sugar level") ||
      message.includes("predict my sugar level") ||
      message.includes("my health")
    )
    return "you can press the start prediction bar to check your blood sugar level"
    

    return "Sorry, I didn't understand that. Try asking about DiaCare platform or health tips.";
  }
});
