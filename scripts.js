// DOM Elements.
const overlay = document.getElementById("overlay");
const nameMenu = document.getElementById("name-menu");
const nameForm = document.getElementById("name-form");
const playerNameInput = document.getElementById("player-name-input");
const rivalNameInput = document.getElementById("rival-name-input");
const postGameMenu = document.getElementById("post-game-menu");
const postGamePlayerName = document.getElementById("post-game-player-name");
const postGameResult = document.getElementById("post-game-result");
const postGameRivalName = document.getElementById("post-game-rival-name");
const scores = document.getElementById("scores");
const scorePlayerName = document.getElementById("score-player-name");
const scorePlayerNumber = document.getElementById("score-player-number");
const scoreRivalName = document.getElementById("score-rival-name");
const scoreRivalNumber = document.getElementById("score-rival-number");
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
const resultRoundResult = document.getElementById("round-result");
const resultRivalName = document.getElementById("result-rival-name");
const resultRivalPokémonName = document.getElementById(
  "result-rival-pokémon-name"
);

const playerPreEffectivenessText = document.getElementById(
  "player-pre-effectiveness-text"
);
const playerAttackEffectiveness = document.getElementById(
  "player-attack-effectiveness"
);
const rivalPreEffectivenessText = document.getElementById(
  "rival-pre-effectiveness-text"
);
const rivalAttackEffectiveness = document.getElementById(
  "rival-attack-effectiveness"
);
const roundsPlayedNumber = document.getElementById("rounds-played-number");
const roundsWonNumber = document.getElementById("rounds-won-number");
const roundsLostNumber = document.getElementById("rounds-lost-number");
const roundsDrawnNumber = document.getElementById("rounds-drawn-number");
const criticalHitsNumber = document.getElementById("critical-hits-number");
const winPercentNumber = document.getElementById("win-percent-number");
const lossPercentNumber = document.getElementById("loss-percent-number");
const drawPercentNumber = document.getElementById("draw-percent-number");
const totalRoundsPlayedNumber = document.getElementById(
  "total-rounds-played-number"
);
const totalWinPercentNumber = document.getElementById(
  "total-win-percent-number"
);
const totalLossPercentNumber = document.getElementById(
  "total-loss-percent-number"
);
const totalDrawPercentNumber = document.getElementById(
  "total-draw-percent-number"
);
const totalCriticalHitsNumber = document.getElementById(
  "total-critical-hits-number"
);
const totalRoundsWonNumber = document.getElementById("total-rounds-won-number");
const totalRoundsLostNumber = document.getElementById(
  "total-rounds-lost-number"
);
const totalRoundsDrawnNumber = document.getElementById(
  "total-rounds-drawn-number"
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

const roundResultMap = {
  Win: { player: "Win", rival: "Lose" },
  Lose: { player: "Lose", rival: "Win" },
  Draw: { player: "Draw", rival: "Draw" },
};

const pokémonAttackEffectiveness = {
  Draw: {
    preEffectivenessText: "But it",
    effectivenessText: "failed!",
  },
  Lose: {
    preEffectivenessText: "It's",
    effectivenessText: "not very effective...",
  },
  Win: {
    preEffectivenessText: "It's",
    effectivenessText: "super effective!",
  },
};

const attackIDs = {
  Win: "player-attack",
  Lose: "rival-attack",
};

const criticalHitIDs = {
  Win: "player-critical-hit",
  Lose: "rival-critical-hit",
};

// Variables.
let playerName;
let rivalName;
let roundsDrawn = 0;
let roundsWon = 0;
let roundsLost = 0;
let roundsPlayed = 0;
let playerScore = 0;
let rivalScore = 0;
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
let expValue;
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;
let winPercentValue;
let lossPercentValue;
let drawPercentValue;
let totalRoundsPlayed = 0;
let totalRoundsWon = 0;
let totalRoundsLost = 0;
let totalRoundsDrawn = 0;
let totalCriticalHits = 0;
let totalWinPercentValue;
let totalLossPercentValue;
let totalDrawPercentValue;
let criticalHits = 0;

// Executes on page loading.
window.onload = function () {
  nameMenu.classList.add("active");
  nameForm.addEventListener("submit", function (e) {
    // Prevents page refresh on form submission.
    e.preventDefault();
    playerName = playerNameInput.value;
    rivalName = rivalNameInput.value;
    if (playerName && rivalName) {
      nameMenu.classList.replace("active", "inactive");
      setTimeout(function () {
        nameMenu.classList.replace("inactive", "disabled");
        postGameMenu.classList.replace("disabled", "hidden");
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
    const criticalHitElements = document.getElementsByClassName("critical-hit");
    for (let i = 0; i < criticalHitElements.length; i++) {
      criticalHitElements[i].classList.add("disabled");
    }
    roundsPlayed++;
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
    roundResult = getRoundResult(playerChoice, rivalChoice);
    if (roundResult === "Win") {
      playerScore += 1;
      roundsWon += 1;
      resultRoundResult.textContent = "WON";
      resultRoundResult.classList.remove("lose", "draw");
      resultRoundResult.classList.add("win");
    } else if (roundResult === "Lose") {
      rivalScore += 1;
      roundsLost += 1;
      resultRoundResult.textContent = "LOST";
      resultRoundResult.classList.remove("win", "draw");
      resultRoundResult.classList.add("lose");
    } else {
      roundsDrawn += 1;
      resultRoundResult.textContent = "DREW";
      resultRoundResult.classList.remove("win", "lose");
      resultRoundResult.classList.add("draw");
    }
    generateCriticalHit(roundResult);
    updateEffectivenessText(roundResult);
    checkScores();
    scorePlayerNumber.textContent = playerScore;
    scoreRivalNumber.textContent = rivalScore;
  });
}

function updateEffectiveness(
  effectivenessElement,
  preEffectivenessTextElement,
  outcome
) {
  const roundResults = ["win", "lose", "draw"];
  roundResults.forEach((className) => {
    effectivenessElement.classList.remove(className);
  });
  preEffectivenessTextElement.textContent =
    pokémonAttackEffectiveness[outcome].preEffectivenessText;
  effectivenessElement.textContent =
    pokémonAttackEffectiveness[outcome].effectivenessText;
  effectivenessElement.classList.add(outcome.toLowerCase());
}

function updateEffectivenessText(roundResult) {
  const result = roundResultMap[roundResult];
  updateEffectiveness(
    playerAttackEffectiveness,
    playerPreEffectivenessText,
    result.player
  );
  updateEffectiveness(
    rivalAttackEffectiveness,
    rivalPreEffectivenessText,
    result.rival
  );
}

function retrieveRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRoundResult(playerChoice, rivalChoice) {
  if (playerChoice === rivalChoice) {
    return "Draw";
  }
  switch (playerChoice) {
    case "Fire":
      return rivalChoice === "Grass" ? "Win" : "Lose";
    case "Grass":
      return rivalChoice === "Water" ? "Win" : "Lose";
    case "Water":
      return rivalChoice === "Fire" ? "Win" : "Lose";
  }
}

function checkScores() {
  if (playerScore === 5 || rivalScore === 5) {
    setTimeout(function () {
      overlay.classList.replace("hidden", "active");
    }, 0);
    setTimeout(function () {
      postGameMenu.classList.replace("hidden", "active");
    }, 2000);

    if (playerScore > rivalScore) {
      postGameResult.textContent = "WON";
      postGameResult.classList.remove("lose");
      postGameResult.classList.add("win");
    } else {
      postGameResult.textContent = "LOST";
      postGameResult.classList.remove("win");
      postGameResult.classList.add("lose");
    }
    totalRoundsPlayed += roundsPlayed;
    totalRoundsWon += roundsWon;
    totalRoundsLost += roundsLost;
    totalRoundsDrawn += roundsDrawn;
    roundsPlayedNumber.textContent = roundsPlayed;
    roundsWonNumber.textContent = roundsWon;
    roundsLostNumber.textContent = roundsLost;
    roundsDrawnNumber.textContent = roundsDrawn;
    criticalHitsNumber.textContent = criticalHits;
    winPercentValue = ((roundsWon / roundsPlayed) * 100).toFixed(2);
    winPercentNumber.textContent = `${winPercentValue}%`;
    lossPercentValue = ((roundsLost / roundsPlayed) * 100).toFixed(2);
    lossPercentNumber.textContent = `${lossPercentValue}%`;
    drawPercentValue = ((roundsDrawn / roundsPlayed) * 100).toFixed(2);
    drawPercentNumber.textContent = `${drawPercentValue}%`;
    totalRoundsPlayedNumber.textContent = totalRoundsPlayed;
    totalRoundsWonNumber.textContent = totalRoundsWon;
    totalRoundsLostNumber.textContent = totalRoundsLost;
    totalRoundsDrawnNumber.textContent = totalRoundsDrawn;
    totalCriticalHitsNumber.textContent = totalCriticalHits;
    totalWinPercentValue = ((totalRoundsWon / totalRoundsPlayed) * 100).toFixed(
      2
    );
    totalWinPercentNumber.textContent = `${totalWinPercentValue}%`;
    totalLossPercentValue = (
      (totalRoundsLost / totalRoundsPlayed) *
      100
    ).toFixed(2);
    totalLossPercentNumber.textContent = `${totalLossPercentValue}%`;
    totalDrawPercentValue = (
      (totalRoundsDrawn / totalRoundsPlayed) *
      100
    ).toFixed(2);
    totalDrawPercentNumber.textContent = `${totalDrawPercentValue}%`;
  }
}

function generateCriticalHit(roundResult) {
  const attackElement = document.getElementById(attackIDs[roundResult]);
  const criticalHitElement = document.getElementById(
    criticalHitIDs[roundResult]
  );
  if (attackElement && criticalHitElement && Math.random() <= 0.33) {
    criticalHits += 1;
    totalCriticalHits += 1;
    criticalHitElement.classList.remove("disabled");
    attackElement.insertAdjacentElement("afterend", criticalHitElement);
  }
}
