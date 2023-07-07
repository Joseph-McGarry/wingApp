// Define an array of chicken wing flavors
const flavors = [
    "Buffalo",
    "Honey Mustard",
    "Teriyaki",
    "Barbecue",
    "Lemon Pepper",
    "Garlic Parmesan",
    "Sweet Chili",
    "Mango Habanero",
    "Sriracha",
    "Ranch",
    "Cajun",
    "Jerk",
    "Peri-Peri",
    "Tikka Masala",
    "Satay",
    "Tandoori",
    "Maple Bacon",
    "Korean BBQ",
    "General Tso's",
    "Chipotle Lime",
    "Chimichurri",
    "Piri Piri",
    "Sticky Soy Glaze",
    "Red Curry",
    "Honey Garlic",
    "Jamaican Curry",
    "Harissa",
    "Peanut Sauce",
    "Spicy Szechuan",
    "Pineapple Teriyaki",
    "Mustard Dill",
    "Wasabi Ginger",
    "Green Curry",
    "Lime Cilantro",
    "Black Pepper",
    "Smoky Chipotle",
    "Garlic Butter",
    "Pesto",
    "Sweet and Sour",
    "Bourbon Glaze",
    "Thai Basil",
    "Raspberry Chipotle",
    "Hoisin Glaze",
    "Smoky BBQ",
    "Tzatziki",
    "Lemon Herb",
    "Honey Sriracha",
    "Peanut Satay",
    "Moroccan Spice",
    "Ginger Scallion"
];

// Function to generate a random flavor combination
function generateCombination() {
    const flavor1 = flavors[Math.floor(Math.random() * flavors.length)];
    const flavor2 = flavors[Math.floor(Math.random() * flavors.length)];

    // Display the combination on the webpage
    const combinationElement = document.getElementById("combination");
    combinationElement.textContent = `Try the combination of ${flavor1} and ${flavor2}!`;

    // Enable the search button
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.disabled = false;

    // Set the search query as a data attribute on the search button
    searchBtn.setAttribute("data-query", `${flavor1} ${flavor2}`);
}

// Function to search the web for recipes
function searchRecipes() {
    const searchQuery = document.getElementById("searchBtn").getAttribute("data-query");
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery + " chicken wings recipe")}`;
    window.open(searchUrl, "_blank");
}

// Add an event listener to the generate button
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateCombination);

// Add an event listener to the search button
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchRecipes);