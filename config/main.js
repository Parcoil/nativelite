// This changes the title of your site

var sitename = "Native Lite (CHANGE ME)"; // Change this to change the name of your website.

// more settings in main.css

// END CONFIG
import "/./config/custom.js";
// import "https://nativegames.net/media/nativescript.js";
var serverUrl1 = "https://assets-taupe.vercel.app";
var currentPageTitle = document.title;
document.title = `${currentPageTitle} | ${sitename}`;
let gamesData = []; // Store original games data

// Function to display filtered games
function displayFilteredGames(filteredGames) {
  const gamesContainer = document.getElementById("gamesContainer");
  gamesContainer.innerHTML = ""; // Clear previous content

  filteredGames.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const gameImage = document.createElement("img");
    gameImage.src = `${serverUrl1}/${game.url}/${game.image}`;
    gameImage.alt = game.name;
    gameImage.onclick = () => {
      window.location.href = `play.html?gameurl=${game.url}/`;
    };

    const gameName = document.createElement("p");
    gameName.textContent = game.name;

    gameDiv.appendChild(gameImage);
    gameDiv.appendChild(gameName);
    gamesContainer.appendChild(gameDiv);
  });
}

// Function to handle search input
function handleSearchInput() {
  const searchInputValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredGames = gamesData.filter((game) =>
    game.name.toLowerCase().includes(searchInputValue)
  );
  displayFilteredGames(filteredGames);
}

// Fetch games from JSON file
fetch("./config/games.json") // Assuming games.json is located in a 'config' directory
  .then((response) => response.json())
  .then((data) => {
    gamesData = data; // Store original games data
    displayFilteredGames(data); // Display all games initially
  })
  .catch((error) => console.error("Error fetching games:", error));

// Add event listener for search input
document
  .getElementById("searchInput")
  .addEventListener("input", handleSearchInput);

document.getElementById("title").innerHTML = `${sitename}`;

// // This changes the color of your site

// var color = "#000000";

// // This changes the Background color of your site

// var bgcolor = "#ffffff";
