// Hardcoded values for the season and plant type
let season = prompt("Enter a season:"); // TODO: Replace with prompt() to allow user interaction.
let plantType = prompt("What type of plant is it:"); // TODO: Replace with prompt() to allow user interaction.

//Determine advice based on season
const seasonAdvice = {
    summer: "Water your plants regularly and provide some shade.\n",
    winter: "Protect your plants from frost with covers.\n",
    autumn: "No advice for this season.\n",
    spring: "No advice for this season.\n"
};

//Determine advice based on plant type
const plantAdvice = {
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!",
    herb: "Harvest regularly to promote growth.",
    fruit: "Ensure plenty of sunlight and support."
};

// Variable to hold gardening advice
let advice = "";

advice += seasonAdvice[season];
advice += plantAdvice[plantType];

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.