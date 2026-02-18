const mealData = {
  "staple": [
    {name: "Chapati / Roti", carbs: 21, GI: 50, deltaBS: 12},
    {name: "Phulka", carbs: 16, GI: 50, deltaBS: 10},
    {name: "Paratha (plain)", carbs: 27, GI: 55, deltaBS: 17},
    {name: "Rice (white, boiled)", carbs: 45, GI: 70, deltaBS: 30},
    {name: "Brown rice", carbs: 45, GI: 55, deltaBS: 22},
    {name: "Poha", carbs: 35, GI: 70, deltaBS: 23},
    {name: "Idli", carbs: 25, GI: 55, deltaBS: 15},
    {name: "Dosa", carbs: 30, GI: 60, deltaBS: 18},
  ],
  "legumes": [
    {name: "Dal (boiled lentils)", carbs: 15, GI: 30, deltaBS: 7},
    {name: "Chickpeas / Chana", carbs: 45, GI: 35, deltaBS: 12},
    {name: "Rajma / Kidney beans", carbs: 40, GI: 35, deltaBS: 12},
  ],
  "vegetables": [
    {name: "Potato", carbs: 30, GI: 70, deltaBS: 18},
    {name: "Carrot", carbs: 6, GI: 45, deltaBS: 4},
    {name: "Spinach", carbs: 1, GI: 15, deltaBS: 1},
  ],
  "fruits": [
    {name: "Banana", carbs: 25, GI: 55, deltaBS: 14},
    {name: "Apple", carbs: 20, GI: 40, deltaBS: 9},
  ],
  "snacks": [
    {name: "Ladoo", carbs: 20, GI: 70, deltaBS: 15},
    {name: "Jalebi", carbs: 35, GI: 80, deltaBS: 23},
  ],
  "dairy": [
    {name: "Milk (whole)", carbs: 12, GI: 30, deltaBS: 6},
    {name: "Yogurt (unsweetened)", carbs: 10, GI: 35, deltaBS: 5},
  ]
};

const categorySelect = document.getElementById("meal-category");
const mealSelect = document.getElementById("meal-item");
const quantityInput = document.getElementById("quantity");
const calculateBtn = document.getElementById("calculate-btn");
const spikeBar = document.getElementById("spike-bar");
const spikeValue = document.getElementById("spike-value");

// Populate meal items based on category
categorySelect.addEventListener("change", () => {
  const cat = categorySelect.value;
  mealSelect.innerHTML = '<option value="">-- Select Meal --</option>';
  if(mealData[cat]){
    mealData[cat].forEach(meal => {
      const option = document.createElement("option");
      option.value = meal.name;
      option.textContent = meal.name;
      mealSelect.appendChild(option);
    });
  }
});

// Calculate ΔBS
calculateBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const mealName = mealSelect.value;
  const quantity = parseFloat(quantityInput.value) || 1;

  if(!category || !mealName){
    alert("Please select category and meal");
    return;
  }

  const meal = mealData[category].find(m => m.name === mealName);
  const deltaBS = meal.deltaBS * quantity;
  const carbs = meal.carbs* quantity;
   let giFactor = 0;
if(meal.GI <= 55){
    giFactor = 0.5;  // low GI
}else if(meal.GI <= 69){
    giFactor = 0.7;  // medium GI
}else{
    giFactor = 1.0;  // high GI
}

  // Animate spike bar (max width 100%)
  let spikePercent = Math.min(deltaBS, 100);
  spikeBar.style.width = spikePercent + "%";

  spikeValue.textContent = `Estimated ΔBS: ${deltaBS} mg/dL  with GI: ${giFactor} and Carbohydrate : ${carbs} `;
});
