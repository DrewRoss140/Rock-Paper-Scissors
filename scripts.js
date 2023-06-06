// DOM Elements.
const overlay = document.getElementById("overlay");
const nameMenu = document.getElementById("name-menu");
const nameForm = document.getElementById("name-form");
const playerNameInput = document.getElementById("player-name-input");
const rivalNameInput = document.getElementById("rival-name-input");
const postGamePlayerName = document.getElementById("post-game-player-name");
const postGameRivalName = document.getElementById("post-game-rival-name");
const scores = document.getElementById("scores");
const scorePlayerName = document.getElementById("score-player-name");
const scoreRivalName = document.getElementById("score-rival-name");
const round = document.getElementById("round");
const playerPokémonPlayerName = document.getElementById(
  "player-pokémon-player-name"
);
const playerPokémonPokémonName = document.getElementById(
  "player-pokémon-pokémon-name"
);
const rivalPokémonRivalName = document.getElementById(
  "rival-pokémon-rival-name"
);
const rivalPokémonPokémonName = document.getElementById(
  "rival-pokémon-pokémon-name"
);
const playerAttackPlayerName = document.getElementById(
  "player-attack-player-name"
);
const playerAttackPokémonName = document.getElementById(
  "player-attack-pokémon-name"
);
const playerAttackPlayerPokémonAttack = document.getElementById(
  "player-attack-player-pokémon-attack"
);
const rivalAttackRivalName = document.getElementById("rival-attack-rival-name");
const rivalAttackPokémonName = document.getElementById(
  "rival-attack-pokémon-name"
);
const rivalAttackRivalPokémonAttack = document.getElementById(
  "rival-attack-rival-pokémon-attack"
);
const resultPlayerName = document.getElementById("result-player-name");
4;
const resultPlayerPokémonName = document.getElementById(
  "result-player-pokémon-name"
);
const resultRivalName = document.getElementById("result-rival-name");
const resultRivalPokémonName = document.getElementById(
  "result-rival-pokémon-name"
);

// Data Structures.

const buttons = ["fire-button", "grass-button", "water-button"];

const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE",
};

const choices = ["Fire", "Grass", "Water"];

const pokémonAttacks = {
  Fire: [
    "EMBER",
    "FIRE FANG",
    "FIRE SPIN",
    "FLAMETHROWER",
    "FLARE BLITZ",
    "INFERNO",
  ],
  Grass: [
    "LEECH SEED",
    "PETAL BLIZZARD",
    "PETAL DANCE",
    "RAZOR LEAF",
    "SEED BOMB",
    "VINE WHIP",
  ],
  Water: [
    "AQUA TAIL",
    "BUBBLE",
    "HYDRO PUMP",
    "RAIN DANCE",
    "SHELL SMASH",
    "WATER GUN",
    "WATER PULSE",
  ],
};

const playerNameElements = {
  "player-name-elements": [
    postGamePlayerName,
    scorePlayerName,
    resultPlayerName,
  ],
  "player-name-elements-with-colon": [playerPokémonPlayerName],
  "player-name-elements-with-apostrophe": [
    playerAttackPlayerName,
    resultPlayerName,
  ],
};

const rivalNameElements = {
  "rival-name-elements": [postGameRivalName, scoreRivalName, resultRivalName],
  "rival-name-elements-with-colon": [rivalPokémonRivalName],
  "rival-name-elements-with-apostrophe": [
    rivalAttackRivalName,
    resultRivalName,
  ],
};

const playerPokémonNameElements = {
  "player-pokémon-elements": [playerAttackPokémonName, resultPlayerPokémonName],
  "player-pokémon-elements-with-exclamation": [playerPokémonPokémonName],
};

const rivalPokémonNameElements = {
  "rival-pokémon-elements": [rivalAttackPokémonName],
  "rival-pokémon-elements-with-exclamation": [
    rivalPokémonPokémonName,
    resultRivalPokémonName,
  ],
};

const pokémonAttackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!",
};

const roundResults = ["Draw", "Lose", "Win"];

// Variables.

let playerName;
let rivalName;
let suffix;
let playerPreviousPokémon;
let rivalPreviousPokémon;
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

// Executes on page loading.
window.onload = function () {
  nameMenu.classList.add("active");
  nameForm.addEventListener("submit", function (e) {
    // Prevents page refresh on form submission.
    e.preventDefault();
    playerName = playerNameInput.value;
    rivalName = rivalNameInput.value;
    // Validates that both inputs have
    if (playerName && rivalName) {
      nameMenu.classList.replace("active", "inactive");
      setTimeout(function () {
        nameMenu.classList.replace("inactive", "hidden");
        overlay.classList.add("fade-out");
      }, 2000);
      setTimeout(function () {
        overlay.classList.remove("active", "inactive");
      }, 2000);
      setTimeout(function () {
        overlay.classList.replace("fade-out", "hidden");
      }, 4000);
      assignPlayerNames(playerNameElements, playerName);
      assignPlayerNames(rivalNameElements, rivalName);
    }
  });
};

buttons.forEach(handleButtonClick);

// Assigns inputted player and rival names to their respective DOM elements.
function assignPlayerNames(elements, name) {
  Object.keys(elements).forEach((key) => {
    suffix = "";
    // Checks if items in playerNameElements/rivalNameElements are associated to the key "with-colon".
    if (key.includes("with-colon")) {
      suffix = ":";
      // Checks if items in playerNameElements/rivalNameElements are associated to the key "with-apostrophe".
    } else if (key.includes("with-apostrophe")) {
      suffix = name.endsWith("s") ? "'" : "'s";
    }
    // Assigns inputted names to their respective DOM elements, with the addition of the relevant suffix (if applicable).
    elements[key].forEach((element) => {
      element.textContent = name + suffix;
    });
  });
}

// Assigns player and rival Pokémon names to their respective DOM elements.
function assignPokémonNames(pokémonElements, pokémonName, previousPokémon) {
  Object.keys(pokémonElements).forEach((key) => {
    suffix = "";
    if (key.includes("with-exclamation")) {
      suffix = "!";
    }
    // Updates class name of respective element to append selected Pokémon name, for CSS style selection.
    pokémonElements[key].forEach((element) => {
      if (previousPokémon) {
        element.classList.remove(previousPokémon.toLowerCase());
      }
      element.classList.add(pokémonName.toLowerCase());
      element.textContent = pokémonName + suffix;
    });
  });
}

function handleButtonClick(buttonID) {
  const button = document.getElementById(buttonID);
  button.addEventListener(
    "click",
    function () {
      if (scores && round) {
        scores.classList.remove("hidden");
        round.classList.remove("hidden");
      }
    },
    { once: true }
  );
  button.addEventListener("click", function () {
    const playerChoice = button.querySelector("img").alt;
    playerPreviousPokémon = playerPokémon;
    playerPokémon = pokémon[playerChoice];
    assignPokémonNames(
      playerPokémonNameElements,
      playerPokémon,
      playerPreviousPokémon
    );
    playerPokémonAttack = retrieveRandomItem(pokémonAttacks[playerChoice]);
    playerAttackPlayerPokémonAttack.textContent = `${playerPokémonAttack}!`;
    if (playerPreviousPokémon) {
      playerAttackPlayerPokémonAttack.classList.remove(
        playerPreviousPokémon.toLowerCase()
      );
    }
    playerAttackPlayerPokémonAttack.classList.add(playerPokémon.toLowerCase());
    rivalChoice = retrieveRandomItem(choices);
    rivalPreviousPokémon = rivalPokémon;
    rivalPokémon = pokémon[rivalChoice];
    assignPokémonNames(
      rivalPokémonNameElements,
      rivalPokémon,
      rivalPreviousPokémon
    );
    rivalPokémonAttack = retrieveRandomItem(pokémonAttacks[rivalChoice]);
    rivalAttackRivalPokémonAttack.textContent = `${rivalPokémonAttack}!`;
    if (rivalPreviousPokémon) {
      rivalAttackRivalPokémonAttack.classList.remove(
        rivalPreviousPokémon.toLowerCase()
      );
    }
    rivalAttackRivalPokémonAttack.classList.add(rivalPokémon.toLowerCase());
  });
}

function retrieveRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
