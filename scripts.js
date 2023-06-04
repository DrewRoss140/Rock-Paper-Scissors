// Define element IDs to be referenced.
const elementIDs = [
  "overlay",
  "name-menu",
  "name-form",
  "player-name-input",
  "rival-name-input",
  "post-game-player-name",
  "post-game-rival-name",
  "score-player-name",
  "score-rival-name",
  "player-pokémon-player-name",
  "rival-pokémon-rival-name",
  "player-attack-player-name",
  "rival-attack-rival-name",
  "result-player-name",
  "result-rival-name",
  "player-pokémon-pokémon-name",
  "player-attack-pokémon-name",
  "result-player-pokémon-name",
  "rival-pokémon-pokémon-name",
  "rival-attack-pokémon-name",
  "result-rival-pokémon-name",
];

// Reduce function is used to create a new JavaScript element, where each key is the element's ID, and each value is the corresponding DOM object.
const elements = elementIDs.reduce((element, id) => {
  element[id] = document.getElementById(id);
  return element;
}, {});

const buttons = ["fire-button", "grass-button", "water-button"];

const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE",
};

const pokémonAttacks = {
  Fire: ["EMBER", "FLAME THROWER"],
  Grass: ["RAZOR LEAF", "VINE WHIP"],
  Water: ["BUBBLE", "HYDRO PUMP", "WATER GUN"],
};

const pokémonAttackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!",
};

const roundResults = ["Draw", "Lose", "Win"];

// Group player, and rival, name elements based on their context.
const playerNameElements = {
  // Elements where the player name is displayed normally.
  "player-name-elements": [
    elements["post-game-player-name"],
    elements["score-player-name"],
    elements["result-player-name"],
  ],
  // Elements where the player name is displayed with a trailing ":".
  "player-name-elements-with-colon": [elements["player-pokémon-player-name"]],
  // EElements where the player name is displayed with a trailing "'s", or "'", depending on last character.
  "player-name-elements-with-apostrophe": [
    elements["player-attack-player-name"],
    elements["result-player-name"],
  ],
};

const rivalNameElements = {
  "rival-name-elements": [
    elements["post-game-rival-name"],
    elements["score-rival-name"],
    elements["result-rival-name"],
  ],
  "rival-name-elements-with-colon": [elements["rival-pokémon-rival-name"]],
  "rival-name-elements-with-apostrophe": [
    elements["rival-attack-rival-name"],
    elements["result-rival-name"],
  ],
};

const playerPokémonElements = {
  "player-pokémon-elements": [
    elements["player-pokémon-pokémon-name"],
    elements["player-attack-pokémon-name"],
    elements["result-player-pokémon-name"],
  ],
};

const rivalPokémonElements = {
  "rival-pokémon-elements": [
    elements["rival-pokémon-pokémon-name"],
    elements["rival-attack-pokémon-name"],
    elements["result-rival-pokémon-name"],
  ],
};

let playerChoice;
let rivalChoice;
let playerPokémon;
let rivalPokémon;
let playerPokémonAttack;
let rivalPokémonAttack;
let playerPokémonAttackEffectiveness;
let rivalPokémonAttackEffectiveness;
let roundResult;
let playerScore;
let rivalScore;
let expValue;
let roundsPlayed;
let roundsDrawn = 0;
let totalRoundsPlayed = 0;
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;

window.onload = function () {
  elements["name-menu"].classList.add("active");
  elements["name-form"].addEventListener("submit", function (e) {
    e.preventDefault();
    let playerName = elements["player-name-input"].value;
    let rivalName = elements["rival-name-input"].value;
    if (playerName && rivalName) {
      elements["name-menu"].classList.remove("active");
      elements["name-menu"].classList.add("inactive");
      setTimeout(function () {
        elements["name-menu"].classList.replace("inactive", "hidden");
        elements["overlay"].classList.add("fade-out");
      }, 3000);
      setTimeout(function () {
        elements["overlay"].classList.remove("active", "inactive");
      }, 3000);
      setTimeout(function () {
        elements["overlay"].classList.replace("fade-out", "hidden");
      }, 6000);
      assignTextContent(playerNameElements, playerName);
      assignTextContent(rivalNameElements, rivalName);
    }
  });
};

buttons.forEach(handleButtonClick);

// Function to set the text content of elements, based on their group.
function assignTextContent(elements, name) {
  // For each group of elements.
  Object.keys(elements).forEach((key) => {
    // For each element in the group.
    elements[key].forEach((element) => {
      // If the element should have a ":" appended.
      if (key.includes("with-colon")) {
        element.textContent = `${name}:`;
        // Else if the element should have a "'s", or "'" appended.
      } else if (key.includes("with-apostrophe")) {
        element.textContent = name.endsWith("s") ? `${name}'` : `${name}'s`;
        // Else the element should display the player name normally.
      } else {
        element.textContent = name;
      }
    });
  });
}

// Function to set Pokémon names to their respective elements.
function assignPokemonNames(pokemonElements, pokemonName) {
  // For each group of Pokémon elements.
  Object.keys(pokemonElements).forEach((key) => {
    // For each element in the group.
    pokemonElements[key].forEach((element) => {
      // Set the Pokémon name.
      element.textContent = pokemonName;
    });
  });
}

// Function to handle the user clicking buttons.
function handleButtonClick(buttonID) {
  const button = document.getElementById(buttonID);
  button.addEventListener("click", function () {
    const playerChoice = button.querySelector("img").alt;
    playerPokémon = pokémon[playerChoice];
    assignPokemonNames(playerPokémonElements, playerPokémon);
    rivalChoice = retrieveRandomItem(choices);
    rivalPokémon = pokémon[rivalChoice];
    assignPokemonNames(rivalPokémonElements, rivalPokémon);
    const playerAttack = retrieveRandomItem(pokémonAttacks[playerChoice]);
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Player Pokémon: ${playerPokémon}`);
    console.log(`Player Attack: ${playerAttack}`);
  });
}

// Function to return a random item from an array.
function retrieveRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
