// Garden advice — Issue 1: ask users for a season and plant type.
// This file works in a browser when opened through index.html.
const season = (prompt("Enter a season (summer or winter):", "summer") || "")
  .trim().toLowerCase();
const plantType = (prompt("Enter a plant type (flower or vegetable):", "flower") || "")
  .trim().toLowerCase();

let advice = "";

if (season === "summer") {
  advice += "Water your plants regularly and provide some shade.\\n";
} else if (season === "winter") {
  advice += "Protect your plants from frost with covers.\\n";
} else {
  advice += "No advice for this season.\\n";
}

if (plantType === "flower") {
  advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
  advice += "Keep an eye out for pests!";
} else {
  advice += "No advice for this type of plant.";
}

console.log(advice);
document.getElementById("advice-output").textContent = advice;
