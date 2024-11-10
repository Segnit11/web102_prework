// Import JSON data about the crowd-funded games from games.js
import GAMES_DATA from './games.js';

// Parse the JSON data into a list of objects for easier data handling
const GAMES_JSON = JSON.parse(GAMES_DATA);

// Function to remove all child elements from a specified DOM element
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Grab the games container element for displaying game data
const gamesContainer = document.getElementById("games-container");

// Function to add game data to the page by creating individual game cards
function addGamesToPage(games) {
    for (const game of games) {
        // Create a new div for each game card and set inner HTML with game info
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <img src="${game.img}" alt="${game.name}" class="game-img" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
        `;
        // Append the game card to the games container
        gamesContainer.append(gameCard);
    }        
}

// Call the function to display all games initially
addGamesToPage(GAMES_JSON);

// Get the element for displaying total contributions
const contributionsCard = document.getElementById("num-contributions");

// Calculate total contributions by summing the number of backers for each game
const totalContributions = GAMES_JSON.reduce((acc, game) => acc + game.backers, 0);

// Display the total contributions in the contributions card
contributionsCard.innerHTML = `
    <p>${totalContributions.toLocaleString()}</p>
`;

// Get the element for displaying the total amount raised
const raisedCard = document.getElementById("total-raised");

// Calculate the total amount raised by summing the pledged amount for each game
const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);

// Display the total amount raised in the raised card
raisedCard.innerHTML = `
    <p>$${totalRaised.toLocaleString()}</p>
`;  

// Get the element for displaying the total number of games
const gamesCard = document.getElementById("num-games");

// Calculate the total number of games
const totalGames = GAMES_JSON.reduce((acc) => acc + 1, 0);

// Display the total number of games in the games card
gamesCard.innerHTML = `
    <p>${totalGames.toLocaleString()}</p>
`;

// Function to filter and display only unfunded games
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    
    // Filter games that have not yet met their funding goal
    const unfundedGames = GAMES_JSON.filter((game) => game.pledged < game.goal);

    // Display the filtered list of unfunded games
    addGamesToPage(unfundedGames);
    console.log(unfundedGames);
}
filterUnfundedOnly();

// Function to filter and display only funded games
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // Filter games that have met or exceeded their funding goal
    const fundedGames = GAMES_JSON.filter((game) => game.pledged >= game.goal);

    // Display the filtered list of funded games
    addGamesToPage(fundedGames);
    console.log(fundedGames);
}
filterFundedOnly();

// Function to display all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // Display all games by re-adding all data from GAMES_JSON
    addGamesToPage(GAMES_JSON);
}
showAllGames();

// Select filter buttons in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// Add event listeners to buttons to filter games based on funding status
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

// Grab the description container to add a summary of funding information
const descriptionContainer = document.getElementById("description-container");

// Calculate the number of unfunded games using reduce
const unfundedCount = GAMES_JSON.reduce((acc, game) => {
    if (game.pledged < game.goal) acc++;
    return acc;
}, 0);

// Create a summary string with funding information
const displayStr = `
<p style="font-size: 1.8em;">
    A total of $${totalRaised.toLocaleString()} has been raised for ${totalGames} game${totalGames === 1 ? '' : 's'}. 
    Currently, ${unfundedCount} game${unfundedCount === 1 ? '' : 's'} remains unfunded. 
    We need your help to fund these amazing games!
</p>`;

// Create a new element for the description and add it to the container
const descriptionHTML = document.createElement("p");
descriptionHTML.innerHTML = displayStr;
descriptionContainer.append(descriptionHTML);

// Get elements for displaying top two games by funding
const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// Sort games by pledged amount in descending order
const sortedGames = GAMES_JSON.sort((item1, item2) => item2.pledged - item1.pledged);

// Destructure sorted games to get the top two games
const [firstGame, secondGame] = sortedGames;

// Display the top-funded game in the first game container
const firstGameName = document.createElement("p");
firstGameName.textContent = firstGame.name;
firstGameContainer.append(firstGameName);

// Display the second top-funded game in the second game container
const secondGameName = document.createElement("p");
secondGameName.textContent = secondGame.name;
secondGameContainer.append(secondGameName);

