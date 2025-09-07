const startButton = document.getElementById("game-button");
const mainScreen = document.getElementById("main-screen");
const gameScreen = document.getElementById("game-screen");
const chooseScreen = document.getElementById("choose-screen");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const fightersContainer = document.getElementById("fighters");
const footer = document.querySelector("footer");
const chooseButton = document.getElementById("choose-button");
const fighterStats = document.querySelectorAll(".fighter-stats");
const fighterHealth = document.querySelectorAll(".fighter-health");
const fighterRight = document.getElementById("right-fighter");
const fighterLeft = document.getElementById("left-fighter");
const attackZones = document.querySelectorAll("#attack-zones input");
const defendZones = document.querySelectorAll("#defend-zones input");
const attackButton = document.getElementById("attack-button");
const actionsSelector = document.getElementById("actions-selector");
const fightLog = document.getElementById("fight-log");
const playerNameInput = document.getElementById("player-name");
const screens = document.querySelectorAll(".screen");
const chooseFighters = document.querySelectorAll('#choose-screen .fighter');
const secretFighters = document.querySelectorAll('#choose-screen .fighter.secret');
const bruhas = document.getElementById("bruhas");
const serega = document.getElementById("serega");
const homeButton = document.getElementById("home-button");
const profileButton = document.getElementById("profile-button");
const statsButton = document.getElementById("stats-button");
const navButtons = document.getElementById("nav");
const profileScreen = document.getElementById("profile-screen");
const saveProfileButton = document.getElementById("save-profile");
const statsScreen = document.getElementById("stats-screen");
const totalGames = document.getElementById("total-games");
const totalWins = document.getElementById("total-wins");
const totalLosses = document.getElementById("total-losses");
const winRate = document.getElementById("win-rate");
const changePlayerName = document.getElementById("change-player-name");

const characters = {
    giva: {
        name: "Giva",
        id: "giva",
        wins: 0,
        losses: 0,
        health: 100,
        damage: 20,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.0, stomach: 1.1, legs: 1.2 },
        critical_multiplier: 1.5
    },
    nato: {
        name: "Nato",
        id: "nato",
        wins: 0,
        losses: 0,
        health: 95,
        damage: 21,
        defense_modifiers: { head: 1.0, body: 0.95, neck: 1.0, stomach: 1.05, legs: 1.1 },
        critical_multiplier: 1.6
    },
    pobo: {
        name: "Pobo",
        id: "pobo",
        wins: 0,
        losses: 0,
        health: 110,
        damage: 18,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 0.95, stomach: 1.0, legs: 1.1 },
        critical_multiplier: 1.4
    },
    plek: {
        name: "Plek",
        id: "plek",
        wins: 0,
        losses: 0,
        health: 90,
        damage: 23,
        defense_modifiers: { head: 1.1, body: 1.0, neck: 1.05, stomach: 1.0, legs: 0.95 },
        critical_multiplier: 1.7
    },
    serega: {
        name: "Serega",
        id: "serega",
        wins: 0,
        losses: 0,
        health: 105,
        damage: 19,
        defense_modifiers: { head: 0.95, body: 1.0, neck: 1.05, stomach: 1.1, legs: 1.0 },
        critical_multiplier: 1.5
    },
    bruhas: {
        name: "Bruhas",
        id: "bruhas",
        wins: 0,
        losses: 0,
        health: 100,
        damage: 20,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.6
    }
};

const enemies = [
    {
        name: "Rat",
        id: "rat",
        health: 70,
        damage: 12,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.3,
        attacks_per_round: 1,
        defenses_per_round: 1
    },
    {
        name: "Skeleton",
        id: "skeleton",
        health: 75,
        damage: 15,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.1, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.3,
        attacks_per_round: 1,
        defenses_per_round: 1
    },
    {
        name: "Spider",
        id: "spider",
        health: 80,
        damage: 15,
        defense_modifiers: { head: 1.0, body: 1.1, neck: 0.9, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.5,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Wolf",
        id: "wolf",
        health: 85,
        damage: 17,
        defense_modifiers: { head: 1.1, body: 1.0, neck: 1.0, stomach: 0.95, legs: 1.0 },
        critical_multiplier: 1.4,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Goblin",
        id: "goblin",
        health: 90,
        damage: 18,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.1, legs: 0.9 },
        critical_multiplier: 1.4,
        attacks_per_round: 1,
        defenses_per_round: 2
    },
    {
        name: "Troll",
        id: "troll",
        health: 120,
        damage: 20,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.1 },
        critical_multiplier: 1.5,
        attacks_per_round: 1,
        defenses_per_round: 3
    },
    {
        name: "Ogre",
        id: "ogre",
        health: 130,
        damage: 22,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 0.9, legs: 1.1 },
        critical_multiplier: 1.6,
        attacks_per_round: 1,
        defenses_per_round: 2
    },
    {
        name: "Orc",
        id: "orc",
        health: 100,
        damage: 19,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.5,
        attacks_per_round: 2,
        defenses_per_round: 2
    },
    {
        name: "Wraith",
        id: "wraith",
        health: 95,
        damage: 21,
        defense_modifiers: { head: 0.95, body: 1.1, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.7,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Dragonling",
        id: "dragonling",
        health: 140,
        damage: 24,
        defense_modifiers: { head: 1.0, body: 0.9, neck: 1.0, stomach: 1.1, legs: 1.0 },
        critical_multiplier: 1.8,
        attacks_per_round: 2,
        defenses_per_round: 2
    }
];

const zones = [
    "head", "body", "neck", "stomach", "legs"
];

const currentFightData = {
    selectedFighter: null,
    opponentFighter: null,
    playerHealth: 0,
    enemyHealth: 0
};

// The user's data is stored in localStorage

const userData = JSON.parse(localStorage.getItem("userData")) || {
    name: "",
    enemyCounter: 0,
    fights: 0,
    wins: 0,
    characterWins: {
        "serega": 0,
        "bruhas": 0,
        "giva": 0,
        "nato": 0,
        "pobo": 0,
        "plek": 0
    },
    characterLosses: {
        "serega": 0,
        "bruhas": 0,
        "giva": 0,
        "nato": 0,
        "pobo": 0,
        "plek": 0
    },
    currentScreen: mainScreen.id,
    currentFight: {
        selectedFighterId: currentFightData.selectedFighter?.id || null,
        opponentFighterId: currentFightData.opponentFighter?.id || null,
        playerHealth: currentFightData.playerHealth,
        enemyHealth: currentFightData.enemyHealth,
        fightLog: []
    }
};

function updateUserData() {
    localStorage.setItem("userData", JSON.stringify(userData));
}

/*
    * Displaying fighters on the Choose Screen
    * - Showing fighter images, health and stats (wins/losses)
    * - Hiding/showing secret fighters based on user progress
*/

function renderFightersOnChooseScreen() {
    chooseFighters.forEach(fighterElem => {
        const fighterId = fighterElem.id;

        // Update health
        fighterElem.querySelector('.fighter-health').innerHTML = `
            <p class="health"><span class="red fa-solid fa-heart"></span> ${characters[fighterId].health}</p>
        `;

        // Update stats
        fighterElem.querySelector('.fighter-stats').innerHTML = `
            <p class="green">Wins: ${userData.characterWins[fighterId]}</p>
            <p class="red">Loses: ${userData.characterLosses[fighterId]}</p>
        `;

        // Check secret status and update secret fighters images
        let imgSrc = `images/character-${fighterId}.svg`;
        let isSecret = false;

        if (userData.fights < 2 && [...secretFighters].some(f => f === fighterElem)) {
            imgSrc = "images/character-secret.svg";
            isSecret = true;
        } else if (userData.fights >= 2 && userData.wins < 5 && fighterId === "bruhas") {
            imgSrc = "images/character-secret.svg";
            isSecret = true;
        }

        fighterElem.querySelector(".fighter-image").src = imgSrc;

        if (isSecret) {
            fighterElem.classList.add("secret");
        } else {
            fighterElem.classList.remove("secret");
        }
    });
}

// Handling the carousel on the choose screen

function scrollSlider(direction) {
    const currentlySelectedFighter = document.querySelector(".fighter.selected");
    const fighters = document.querySelectorAll("#choose-screen .fighter");

    currentlySelectedFighter.classList.remove("selected");
    const nextFighter = direction === 'left'
        ? currentlySelectedFighter.previousElementSibling || currentlySelectedFighter
        : currentlySelectedFighter.nextElementSibling || currentlySelectedFighter;

    if (direction === 'left') {
        fightersContainer.prepend(fighters[fighters.length - 1]);
    } else if (direction === 'right') {
        fightersContainer.append(fighters[0]);
    }

    nextFighter.classList.add("selected");
    
    const seregaNotice = document.querySelector("#serega-notice");
    const bruhasNotice = document.querySelector("#bruhas-notice");

    seregaNotice.close();
    bruhasNotice.close();

    if (nextFighter.classList.contains("secret")) {
        chooseButton.disabled = true;
        if (nextFighter.id === "serega") {
            seregaNotice.showModal();
        } else if (nextFighter.id === "bruhas") {
            bruhasNotice.showModal();
        }
    } else {
        chooseButton.disabled = false;
    }
}

/*
    * Changing app screens
    * - Showing the active screen
    * - Showing/hiding nav buttons
    * - Saving the current screen to storage
    * - Updating nav button styles
*/

function setActiveScreen(screen) {
    screens.forEach(s => s.classList.add("hidden"));
    screen.classList.remove("hidden");
}

function populatePlayerName() {
    playerNameInput.value = userData.name;
    changePlayerName.value = userData.name;
    startButton.disabled = !userData.name;
}

function updateNavForScreen(screen) {
    navButtons.classList.remove("hidden");
    [homeButton, profileButton, statsButton].forEach(btn => btn.classList.remove("current"));

    const screenConfig = {
        [mainScreen.id]: () => {
            populatePlayerName();
        },
        [chooseScreen.id]: () => {
            renderFightersOnChooseScreen();
            fightersContainer.scrollLeft = 110;
            homeButton.classList.add("current");
        },
        [profileScreen.id]: () => {
            populatePlayerName();
            profileButton.classList.add("current");
        },
        [statsScreen.id]: () => {
            statsButton.classList.add("current");
        },
        [gameScreen.id]: () => {
            loadFightData();
            navButtons.classList.add("hidden");
        }
    }

    screenConfig[screen.id]();
}

function saveCurrentScreen(screen) {
    userData.currentScreen = screen.id;
    updateUserData();
}

function showScreen(screen) {
    setActiveScreen(screen);
    updateNavForScreen(screen);
    saveCurrentScreen(screen);
}

// Event listners on navigation buttons and secondary pages

startButton.addEventListener("click", () => {
    userData.name = playerNameInput.value.trim();
    showScreen(chooseScreen);
});

homeButton.addEventListener("click", () => {
    showScreen(chooseScreen);
});

profileButton.addEventListener("click", () => {
    showScreen(profileScreen);
});

function renderStats() { 
    totalGames.innerText = userData.fights;
    totalWins.innerText = userData.wins;
    totalLosses.innerText = userData.fights - userData.wins;
    winRate.innerText = userData.fights > 0 ? `${Math.round((userData.wins / userData.fights) * 100)}%` : "0%";
}

statsButton.addEventListener("click", () => {
    showScreen(statsScreen);
    renderStats();
});

playerNameInput.addEventListener("input", (event) => {
    const playerName = event.target.value.trim();
    startButton.disabled = playerName === "";
});

saveProfileButton.addEventListener("click", () => {
    const newName = changePlayerName.value.trim();
    if (newName) {
        userData.name = newName;
        updateUserData();
        showScreen(chooseScreen);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    showScreen(document.getElementById(userData.currentScreen));
});

leftArrow.addEventListener("click", () => scrollSlider('left'));
rightArrow.addEventListener("click", () => scrollSlider('right'));

// Fight logic

/*
    * Upload the current fight to the user data
    * Load the fight data from the user data
*/
function syncFightToUserData() {
    userData.currentFight.selectedFighterId = currentFightData.selectedFighter?.id || null;
    userData.currentFight.opponentFighterId = currentFightData.opponentFighter?.id || null;
    userData.currentFight.playerHealth = currentFightData.playerHealth;
    userData.currentFight.enemyHealth = currentFightData.enemyHealth;
}

function loadFightData() {
    if (!userData.currentFight.selectedFighterId || !userData.currentFight.opponentFighterId) {
        showScreen(chooseScreen);
        return;
    }

    currentFightData.selectedFighter = characters[userData.currentFight.selectedFighterId];
    currentFightData.playerHealth = userData.currentFight.playerHealth;
    currentFightData.opponentFighter = enemies[userData.enemyCounter];
    currentFightData.enemyHealth = userData.currentFight.enemyHealth;

    fighterLeft.querySelector(".fighter-image").src = `images/character-${currentFightData.selectedFighter.id}.svg`;
    fighterLeft.querySelector(".fighter-name").innerText = `${userData.name} — ${currentFightData.selectedFighter.name}`;
    fighterLeft.querySelector(".health-bar").max = currentFightData.selectedFighter.health;
    fighterLeft.querySelector(".health-bar").value = currentFightData.playerHealth;

    fighterRight.querySelector(".fighter-image").src = `images/enemy-${currentFightData.opponentFighter.id}.svg`;
    fighterRight.querySelector(".fighter-name").innerText = `Enemy — ${currentFightData.opponentFighter.name}`;
    fighterRight.querySelector(".health-bar").max = currentFightData.opponentFighter.health;
    fighterRight.querySelector(".health-bar").value = currentFightData.enemyHealth;
    if (userData.currentFight.fightLog.length > 0) {
        userData.currentFight.fightLog.forEach(entry => {
            writeFightLog(entry);
        });
    }

    updateHealth();
}

// Initialize the fight screen after choosing the fighter

chooseButton.addEventListener("click", () => {
    showScreen(gameScreen);
    currentFightData.selectedFighter = characters[document.querySelector(".fighter.selected").id];
    currentFightData.playerHealth = characters[currentFightData.selectedFighter.id].health;
    fighterLeft.querySelector(".fighter-image").src = `images/character-${currentFightData.selectedFighter.id}.svg`;
    fighterLeft.querySelector(".fighter-name").innerText = `${userData.name} — ${currentFightData.selectedFighter.name}`;
    fighterLeft.querySelector(".health-bar").max = currentFightData.selectedFighter.health;

    currentFightData.opponentFighter = enemies[userData.enemyCounter];
    currentFightData.enemyHealth = currentFightData.opponentFighter.health;
    fighterRight.querySelector(".fighter-image").src = `images/enemy-${currentFightData.opponentFighter.id}.svg`;
    fighterRight.querySelector(".fighter-name").innerText = `Enemy — ${currentFightData.opponentFighter.name}`;
    fighterRight.querySelector(".health-bar").max = currentFightData.enemyHealth;
    updateHealth();
    writeFightLog(`<span class="highlight">${userData.name}</span> chose <span class="highlight">${currentFightData.selectedFighter.name}</span> as their fighter.`);
    writeFightLog(`The battle begins between <span class="highlight">${currentFightData.selectedFighter.name}</span> and <span class="highlight">${currentFightData.opponentFighter.name}</span>.`);
    syncFightToUserData();
    updateUserData();
    resetTurn();
});

// Handling attack and defend zones selection

defendZones.forEach(zone => {
    zone.addEventListener("change", () => {
        const selectedZones = Array.from(defendZones).filter(zone => zone.checked).map(zone => zone.value);
        if (selectedZones.length === 2) {
            defendZones.forEach(zone => {
                zone.disabled = !zone.checked;
            });
        } else {
            defendZones.forEach(zone => {
                zone.disabled = false;
            });
        }
    });
});

attackZones.forEach(zone => {
    zone.addEventListener("change", () => {
        const selectedZones = Array.from(attackZones).filter(zone => zone.checked).map(zone => zone.value);
        if (selectedZones.length === 1) {
            attackZones.forEach(zone => {
                zone.disabled = !zone.checked;
            });
        } else {
            attackZones.forEach(zone => {
                zone.disabled = false;
            });
        }
    });
});

// Disabling the Attack button when not enough zones are selected

actionsSelector.addEventListener("change", () => {
    attackButton.disabled = !Array.from(attackZones).some(zone => zone.checked) || Array.from(defendZones).filter(zone => zone.checked).length !== 2;
});

function isCritical() {
    return Math.random() < 0.05; // 5% chance for a critical hit
}

// Choosing emeny attack and defence zones

function enemyTurn() {
    const attacksPerRound = currentFightData.opponentFighter.attacks_per_round;
    const defensesPerRound = currentFightData.opponentFighter.defenses_per_round;

    const attackZones = [];
    for (let i = 0; i < attacksPerRound; i++) {
        let attackZone;
        do {
            attackZone = zones[Math.floor(Math.random() * zones.length)];
        } while (attackZones.includes(attackZone));
        attackZones.push(attackZone);
    }

    const defendZones = [];
    for (let i = 0; i < defensesPerRound; i++) {
        let defendZone;
        do {
            defendZone = zones[Math.floor(Math.random() * zones.length)];
        } while (defendZones.includes(defendZone));
        defendZones.push(defendZone);
    }

    return {
        attack: attackZones,
        defend: defendZones
    };
}

// Calculating damage dealt

function calculateAndPrintDamage(dealer, receiver, attackZones, defendZones) {
    let attackDamage = 0;
    attackZones.forEach(attackZone => {
        const modifier = receiver.defense_modifiers.hasOwnProperty(attackZone) ? receiver.defense_modifiers[attackZone] : 1.0;
        let isCriticalHit = isCritical();

        if (!defendZones.includes(attackZone)) {
            const hitDamage = Math.floor(dealer.damage * modifier * (isCriticalHit ? dealer.critical_multiplier : 1));
            attackDamage += hitDamage;
            writeFightLog(`<span class="highlight">${dealer.name}</span> ${isCriticalHit ? 'lands a <span class="highlight">critical hit</span>' : "attacks"} in the <span class="highlight">${attackZone}</span> for <span class="highlight">${hitDamage}</span>`);
        } else {
            writeFightLog(`<span class="highlight">${dealer.name}</span> ${isCriticalHit ? 'lands a <span class="highlight">critical hit</span>' : "attacks"} in the <span class="highlight">${attackZone}</span>, but <span class="highlight">${receiver.name}</span> blocks.`);
        }
    });

    return attackDamage;
}

// Updating health on the screen

function updateHealth() {
    if (currentFightData.playerHealth < 0) currentFightData.playerHealth = 0;
    if (currentFightData.enemyHealth < 0) currentFightData.enemyHealth = 0;
    fighterLeft.querySelector(".health-bar").value = currentFightData.playerHealth;
    fighterLeft.querySelector(".health-text").innerHTML = `<p class="health"><span class="red fa-solid fa-heart"></span> ${currentFightData.playerHealth}</p>`;
    fighterRight.querySelector(".health-bar").value = currentFightData.enemyHealth;
    fighterRight.querySelector(".health-text").innerHTML = `<p class="health"><span class="red fa-solid fa-heart"></span> ${currentFightData.enemyHealth}</p>`;
}

// Writing the message to the fight log

function writeFightLog(message) {
    const logEntry = document.createElement("div");
    userData.currentFight.fightLog.push(message);
    logEntry.classList.add("fight-log-entry");
    logEntry.innerHTML = `<p>${message}</p>`;
    fightLog.appendChild(logEntry);
    fightLog.scrollTop = fightLog.scrollHeight;
}

// Resetting the checkboxes when the turn ends

function resetTurn() {
    attackZones.forEach(zone => {
        zone.checked = false;
        zone.disabled = false;
    });

    defendZones.forEach(zone => {
        zone.checked = false;
        zone.disabled = false;
    });

    attackButton.disabled = true;
}

/*
    Handling 
*/

function fightTurn() {
    const attackZone = Array.from(attackZones).find(zone => zone.checked);
    const defendZonesSelected = Array.from(defendZones).filter(zone => zone.checked);

    const playerAttackZones = attackZone ? [attackZone.value] : [];
    const playerDefendZones = defendZonesSelected.map(zone => zone.value);

    const enemyAction = enemyTurn();

    const damageDealt = calculateAndPrintDamage(
        currentFightData.selectedFighter,
        currentFightData.opponentFighter,
        playerAttackZones,
        enemyAction.defend
    );

    const damageReceived = calculateAndPrintDamage(
        currentFightData.opponentFighter,
        currentFightData.selectedFighter,
        enemyAction.attack,
        playerDefendZones
    );

    applyDamage(damageDealt, damageReceived);
    updateHealth();
    resetTurn();
    checkFightOutcome();
    syncFightToUserData();
    updateUserData();
}

function applyDamage(damageDealt, damageReceived) {
    currentFightData.playerHealth -= damageReceived || 0;
    currentFightData.enemyHealth -= damageDealt || 0;
}

function checkFightOutcome() {
    const { playerHealth, enemyHealth, selectedFighter, opponentFighter } = currentFightData;

    if (playerHealth <= 0 && enemyHealth <= 0) {
        writeFightLog("It's a draw");
        endFight();
    } else if (playerHealth <= 0) {
        writeFightLog(`<span class="red">${opponentFighter.name}</span> wins. Game Over.`);
        endFight(opponentFighter);
    } else if (enemyHealth <= 0) {
        writeFightLog(`<span class="green">${selectedFighter.name}</span> wins. Congrats!`);
        endFight(selectedFighter);
    }
}


/*
    Handling the end of the fight:
    - Disabling all action buttons
    - Showing the fight result
    - Updating user data
    - Exiting the fight screen
*/

function endFight(winner) {
    disableControls();

    if (winner) {
        const playerId = currentFightData.selectedFighter.id;
        const isPlayerWinner = winner === currentFightData.selectedFighter;

        if (isPlayerWinner) {
            characters[playerId].wins++;
            userData.characterWins[playerId]++;
            userData.enemyCounter++;
            userData.wins++;
        } else {
            characters[playerId].losses++;
            userData.characterLosses[playerId]++;
        }
    }

    userData.fights++;
    resetFightLog();

    setTimeout(() => {
        showScreen(chooseScreen);
        fightLog.innerHTML = "";
    }, 2000);
}

function disableControls() {
    attackButton.disabled = true;
    [...defendZones, ...attackZones].forEach(zone => zone.disabled = true);
}

function resetFightLog() {
    userData.currentFight.fightLog = [];
}

attackButton.addEventListener("click", () => {
    fightTurn();
});