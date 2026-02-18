document.addEventListener("DOMContentLoaded", () => {
  const sleepInput = document.getElementById("sleep-hours");
  const sleepValueDisplay = document.getElementById("sleep-value");
  const calculateBtn = document.getElementById("calculate-btn");
  const stressBar = document.getElementById("stress-bar");
  const stressResult = document.getElementById("stress-value-result");

  // Show live sleep hours
  sleepInput.addEventListener("input", () => {
    sleepValueDisplay.textContent = sleepInput.value;
  });

  calculateBtn.addEventListener("click", () => {
    // Gather inputs
    const sleepHours = parseFloat(sleepInput.value) || 0;
    const workload = document.getElementById("workload").value;
    const emotions = document.getElementById("emotions").value;
    const physical = parseFloat(document.getElementById("physical").value) || 0;
    const social = document.getElementById("social").value;
    const chronic = document.getElementById("chronic").value;

    // Base stress score (0-100)
    let stressScore = 50;

    // Sleep factor
    if(sleepHours < 5) stressScore += 20;
    else if(sleepHours < 7) stressScore += 10;
    else if(sleepHours > 9) stressScore += 5;
    else stressScore -= 10;

    // Workload factor
    if(workload === "low") stressScore -= 5;
    else if(workload === "medium") stressScore += 0;
    else stressScore += 15;

    // Emotional health factor
    if(emotions === "calm") stressScore -= 10;
    else if(emotions === "moderate") stressScore += 5;
    else stressScore += 20;

    // Physical activity
    if(physical >= 5) stressScore -= 10;
    else if(physical < 2) stressScore += 10;

    // Social support
    if(social === "high") stressScore -= 10;
    else if(social === "medium") stressScore += 0;
    else stressScore += 10;

    // Chronic conditions
    if(chronic === "mild") stressScore += 5;
    else if(chronic === "moderate") stressScore += 10;
    else if(chronic === "severe") stressScore += 20;

    // Clamp between 0 and 100
    stressScore = Math.max(0, Math.min(120, stressScore));

    // Animate stress bar
    stressBar.style.width = stressScore + "%";

    // Display result with description
    let description = "";
    if(stressScore <= 30) description = "Low Stress ✅";
    else if(stressScore <= 60) description = "Moderate Stress ⚠️";
    else description = "High Stress ❌";

    stressResult.textContent = `Stress Level: ${Math.floor(stressScore/12)} — ${description}`;
  });
});
