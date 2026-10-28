// Issue 2: refactor advice into a documented reusable function.
function getGardenAdvice(season, plantType) {
  const seasons = {
    summer: "Water your plants regularly and provide some shade.",
    winter: "Protect your plants from frost with covers."
  };
  const plants = {
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!"
  };
  return `${seasons[season] || "No advice for this season."}\n${plants[plantType] || "No advice for this type of plant."}`;
}

// Ask the user for inputs, then display the result.
if (typeof document !== "undefined") {
  const season = (prompt("Enter a season (summer or winter):", "summer") || "").trim().toLowerCase();
  const plantType = (prompt("Enter a plant type (flower or vegetable):", "flower") || "").trim().toLowerCase();
  const advice = getGardenAdvice(season, plantType);
  console.log(advice);
  document.getElementById("advice-output").textContent = advice;
}

// Allow the advice function to be tested using Node.js.
if (typeof module !== "undefined") module.exports = { getGardenAdvice };
