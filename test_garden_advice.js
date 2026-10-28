const assert = require("node:assert/strict");
const { getGardenAdvice } = require("./garden_advice.js");

assert.equal(getGardenAdvice("summer", "flower"),
  "Water your plants regularly and provide some shade.\nUse fertiliser to encourage blooms.");
assert.equal(getGardenAdvice("winter", "vegetable"),
  "Protect your plants from frost with covers.\nKeep an eye out for pests!");
assert.equal(getGardenAdvice("spring", "tree"),
  "No advice for this season.\nNo advice for this type of plant.");
console.log("All garden advice tests passed.");
