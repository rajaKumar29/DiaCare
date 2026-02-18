document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("prediction-form");
  const resultDiv = document.getElementById("prediction-result");
  const stressSlider = document.getElementById("stress-level");
  const stressValue = document.getElementById("stress-value");

  // Show live stress slider value
  stressSlider.addEventListener("input", () => {
    stressValue.textContent = stressSlider.value;
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // --- Gather all inputs ---
    const age = parseFloat(document.getElementById("age").value) || 0;
    const gender = document.getElementById("gender").value;
    const previousBS = parseFloat(document.getElementById("previous-bs").value) || 0;
    const illness = document.getElementById("illness").value;

    const mealType = document.getElementById("meal-type").value;
    const carbs = parseFloat(document.getElementById("carbs").value) || 0;
    const giFactor = parseFloat(document.getElementById("gi").value);

    const insulinTaken = document.getElementById("insulin-taken").value;
    const insulinUnits = parseFloat(document.getElementById("insulin-units").value) || 0;
    const medTaken = document.getElementById("med-taken").value;

    const activityType = document.getElementById("activity-type").value;
    const activityDuration = parseFloat(document.getElementById("activity-duration").value) || 0;

    const stress = parseFloat(document.getElementById("stress-level").value) || 0;
    const hormonal = document.getElementById("hormonal").value;

    const waterIntake = parseFloat(document.getElementById("water-intake").value) || 0;
    const dehydration = document.getElementById("dehydration").value;

    const alcohol = parseFloat(document.getElementById("alcohol-qty").value) || 0;

    const sleepHours = parseFloat(document.getElementById("sleep-hours").value) || 0;
    const activityRoutine = document.getElementById("activity-routine").value;

    // --- Calculations ---
    let deltaFood = (carbs / 50) * giFactor * 30; // simplified
    let deltaInsulin = insulinTaken === "yes" ? -insulinUnits * 40 : 0;
    let deltaMissedMed = medTaken === "no" ? 20 : 0;

    let deltaActivity = 0;
    if(activityType === "light") deltaActivity = -30;
    else if(activityType === "moderate") deltaActivity = -60;
    else if(activityType === "high") deltaActivity = -90;

    let deltaStress = stress * 6; // 0–10 scale
    let deltaIllness = illness === "mild" ? 20 : illness === "moderate" ? 50 : illness === "severe" ? 80 : 0;

    let deltaHormonal = 0;
    if(hormonal === "menstruation") deltaHormonal = 10;
    else if(hormonal === "pregnancy") deltaHormonal = 25;
    else if(hormonal === "menopause") deltaHormonal = 5;

    let deltaDehydration = dehydration === "mild" ? 10 : dehydration === "severe" ? 40 : 0;
    let deltaAlcohol = alcohol * 1; // approximate
    let deltaSleep = sleepHours < 5 ? 15 : 0;
    let deltaRoutine = activityRoutine === "sedentary" ? 10 : 0;

    // Final estimate
    let BS_estimated = previousBS + deltaFood + deltaInsulin + deltaMissedMed + deltaActivity
                       + deltaStress + deltaIllness + deltaHormonal + deltaDehydration
                       + deltaAlcohol + deltaSleep + deltaRoutine;

    // Risk Level
    let risk = "";
    if(BS_estimated < 70) risk = "Hypoglycemia Risk! ⚠️";
    else if(BS_estimated <= 140) risk = "Normal ✅";
    else if(BS_estimated <= 200) risk = "Elevated ⚠️";
    else risk = "High Risk ❌";

    // Show result
    resultDiv.textContent = `Estimated Blood Sugar: ${Math.round(BS_estimated)} mg/dL — ${risk}`;
  });
});
