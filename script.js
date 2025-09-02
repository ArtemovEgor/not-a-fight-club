const mainButton = document.getElementById("game-button");
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

const characters = {
    giva: {
        name: "Giva",
        wins: 0,
        losses: 0,
        health: 100,
        damage: 20,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.0, stomach: 1.1, legs: 1.2 },
        critical_multiplier: 1.5
    },
    nato: {
        name: "Nato",
        wins: 0,
        losses: 0,
        health: 95,
        damage: 21,
        defense_modifiers: { head: 1.0, body: 0.95, neck: 1.0, stomach: 1.05, legs: 1.1 },
        critical_multiplier: 1.6
    },
    pobo: {
        name: "Pobo",
        wins: 0,
        losses: 0,
        health: 110,
        damage: 18,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 0.95, stomach: 1.0, legs: 1.1 },
        critical_multiplier: 1.4
    },
    plek: {
        name: "Plek",
        wins: 0,
        losses: 0,
        health: 90,
        damage: 23,
        defense_modifiers: { head: 1.1, body: 1.0, neck: 1.05, stomach: 1.0, legs: 0.95 },
        critical_multiplier: 1.7
    },
    serega: {
        name: "Serega",
        wins: 0,
        losses: 0,
        health: 105,
        damage: 19,
        defense_modifiers: { head: 0.95, body: 1.0, neck: 1.05, stomach: 1.1, legs: 1.0 },
        critical_multiplier: 1.5
    },
    bruhas: {
        name: "Bruhas",
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
        health: 70,
        damage: 12,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.3,
        attacks_per_round: 1,
        defenses_per_round: 1
    },
    {
        name: "Skeleton",
        health: 75,
        damage: 15,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.1, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.3,
        attacks_per_round: 1,
        defenses_per_round: 1
    },
    {
        name: "Spider",
        health: 80,
        damage: 15,
        defense_modifiers: { head: 1.0, body: 1.1, neck: 0.9, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.5,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Wolf",
        health: 85,
        damage: 17,
        defense_modifiers: { head: 1.1, body: 1.0, neck: 1.0, stomach: 0.95, legs: 1.0 },
        critical_multiplier: 1.4,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Goblin",
        health: 90,
        damage: 18,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.1, legs: 0.9 },
        critical_multiplier: 1.4,
        attacks_per_round: 1,
        defenses_per_round: 2
    },
    {
        name: "Troll",
        health: 120,
        damage: 20,
        defense_modifiers: { head: 0.9, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.1 },
        critical_multiplier: 1.5,
        attacks_per_round: 1,
        defenses_per_round: 3
    },
    {
        name: "Ogre",
        health: 130,
        damage: 22,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 0.9, legs: 1.1 },
        critical_multiplier: 1.6,
        attacks_per_round: 1,
        defenses_per_round: 2
    },
    {
        name: "Orc",
        health: 100,
        damage: 19,
        defense_modifiers: { head: 1.0, body: 1.0, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.5,
        attacks_per_round: 2,
        defenses_per_round: 2
    },
    {
        name: "Wraith",
        health: 95,
        damage: 21,
        defense_modifiers: { head: 0.95, body: 1.1, neck: 1.0, stomach: 1.0, legs: 1.0 },
        critical_multiplier: 1.7,
        attacks_per_round: 2,
        defenses_per_round: 1
    },
    {
        name: "Dragonling",
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

const userData = {
    name: "Egor",
    enemyCounter: 0
};

const currentFightData = {
    user: userData,
    opponentFighter: enemies[userData.enemyCounter]
};

mainButton.addEventListener("click", () => {
    mainScreen.classList.toggle("hidden");
    chooseScreen.classList.toggle("hidden");
    footer.classList.add("hidden");
});

window.addEventListener("DOMContentLoaded", () => {
    fightersContainer.scrollLeft = 110;
    document.querySelectorAll('#choose-screen .fighter').forEach(fighterElem => {
        const fighterId = fighterElem.id;
        const fighter = characters[fighterId];
        fighterElem.querySelector('.fighter-stats').innerHTML = `
            <p class="green">Wins: ${fighter.wins}</p>
            <p class="red">Loses: ${fighter.losses}</p>
        `;
        fighterElem.querySelector('.fighter-health').innerHTML = `
            <p class="health"><span class="red fa-solid fa-heart"></span> ${fighter.health}</p>
        `;
    });
});

function scrollSlider(direction) {
    if (direction === 'left') {
        const lastFighter = document.querySelector(".fighter:last-child");
        fightersContainer.prepend(lastFighter);
    } else if (direction === 'right') {
        const firstFighter = document.querySelector(".fighter:first-child");
        fightersContainer.append(firstFighter);
    }
}

leftArrow.addEventListener("click", () => scrollSlider('left'));
rightArrow.addEventListener("click", () => scrollSlider('right'));

chooseButton.addEventListener("click", () => {
    chooseScreen.classList.toggle("hidden");
    gameScreen.classList.toggle("hidden");
    currentFightData.selectedFighter = characters[document.querySelector(".fighter:nth-child(3)").id];
    fighterLeft.querySelector(".fighter-image").src = `images/character-${currentFightData.selectedFighter.name}.svg`;
    fighterLeft.querySelector(".fighter-name").innerText = `${userData.name} — ${currentFightData.selectedFighter.name}`;
    fighterLeft.querySelector(".health-bar").max = currentFightData.selectedFighter.health;

    const opponentFighter = currentFightData.opponentFighter;
    fighterRight.querySelector(".fighter-image").src = `images/enemy-${opponentFighter.name.toLowerCase()}.svg`;
    fighterRight.querySelector(".fighter-name").innerText = `Enemy — ${opponentFighter.name}`;
    fighterRight.querySelector(".health-bar").max = opponentFighter.health;
    updateHealth();
    writeFightLog(`${userData.name} chose ${currentFightData.selectedFighter.name} as their fighter.`);
    writeFightLog(`The battle begins between ${currentFightData.selectedFighter.name} and ${currentFightData.opponentFighter.name}.`);
});

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

actionsSelector.addEventListener("change", () => {
    attackButton.disabled = !Array.from(attackZones).some(zone => zone.checked) || Array.from(defendZones).filter(zone => zone.checked).length !== 2;
});

function enemyTurn() {
    const enemyAttackZone = zones[Math.floor(Math.random() * zones.length)];
    const defendZone1 = zones[Math.floor(Math.random() * zones.length)];
    let defendZone2;
    do {
        defendZone2 = zones[Math.floor(Math.random() * zones.length)];
    } while (defendZone1 === defendZone2);
    const enemyDefendZones = [defendZone1, defendZone2];
    return {
        attack: enemyAttackZone,
        defend: enemyDefendZones
    };
}

function calculateDamage(dealer, receiver, attackZone, defendZones) {
    console.log(`Calculating damage from ${dealer.name} to ${receiver.name}`);
    console.log(`Attack zone: ${JSON.stringify(attackZone)}`);
    console.log(`Defend zones: ${JSON.stringify(defendZones)}`);
    const modifier = receiver.defense_modifiers.hasOwnProperty(attackZone) ? receiver.defense_modifiers[attackZone] : 1.0;
    let attackDamage = 0;
    if (!defendZones.includes(attackZone)) {
        attackDamage = dealer.damage * modifier;
    }
    console.log(`Damage dealt: ${attackDamage}`);
    return Math.floor(attackDamage);
}

function updateHealth() {
    if (currentFightData.selectedFighter.health < 0) currentFightData.selectedFighter.health = 0;
    if (currentFightData.opponentFighter.health < 0) currentFightData.opponentFighter.health = 0;
    fighterLeft.querySelector(".health-bar").value = currentFightData.selectedFighter.health;
    fighterLeft.querySelector(".health-text").innerHTML = `<p class="health"><span class="red fa-solid fa-heart"></span> ${currentFightData.selectedFighter.health}</p>`;
    fighterRight.querySelector(".health-bar").value = currentFightData.opponentFighter.health;
    fighterRight.querySelector(".health-text").innerHTML = `<p class="health"><span class="red fa-solid fa-heart"></span> ${currentFightData.opponentFighter.health}</p>`;
}

function writeFightLog(message) {
    const logEntry = document.createElement("div");
    logEntry.classList.add("fight-log-entry");
    logEntry.textContent = message;
    fightLog.appendChild(logEntry);
    fightLog.scrollTop = fightLog.scrollHeight;
}

function resetTurn() {
    attackZones.forEach(zone => {
        zone.checked = false;
    });
    defendZones.forEach(zone => {
        zone.checked = false;
        zone.disabled = false;
    });
    attackButton.disabled = true;
}

function finishRound() {
    attackButton.disabled = true;
    defendZones.forEach(zone => {
        zone.disabled = true;
    });
    attackZones.forEach(zone => {
        zone.disabled = true;
    });
}

function fightTurn() {
    const selectedAttackZone = Array.from(attackZones).find(zone => zone.checked);
    const selectedDefendZones = Array.from(defendZones).filter(zone => zone.checked);
    const attackZoneName = selectedAttackZone ? selectedAttackZone.value : null;
    const defendZoneNames = selectedDefendZones.map(zone => zone.value);
    console.log("defendZoneNames:", defendZoneNames);
    const enemyAction = enemyTurn();
    const damageDealt = calculateDamage(
        currentFightData.selectedFighter,
        currentFightData.opponentFighter,
        attackZoneName,
        enemyAction.defend
    );

    const damageReceived = calculateDamage(
        currentFightData.opponentFighter,
        currentFightData.selectedFighter,
        enemyAction.attack,
        defendZoneNames
    );

    if (damageDealt === 0) {
        writeFightLog(`${currentFightData.selectedFighter.name} attack in the ${attackZoneName}, but ${currentFightData.opponentFighter.name} blocks.`);
    } else {
        writeFightLog(`${currentFightData.selectedFighter.name} attacks in the ${attackZoneName} for ${damageDealt}`);
    }

    if (damageReceived === 0) {
        writeFightLog(`${currentFightData.opponentFighter.name} attacks in the ${enemyAction.attack}, but ${currentFightData.selectedFighter.name} blocks`);
    } else {
        writeFightLog(`${currentFightData.opponentFighter.name} attacks in the ${enemyAction.attack} for ${damageReceived}`);
    }
    currentFightData.selectedFighter.health -= isNaN(damageReceived) ? 0 : damageReceived;
    currentFightData.opponentFighter.health -= isNaN(damageDealt) ? 0 : damageDealt;

    updateHealth();

    if (currentFightData.selectedFighter.health === 0 && currentFightData.opponentFighter.health === 0) {
        writeFightLog("It's a draw");
        finishRound();
    } else if (currentFightData.selectedFighter.health === 0) {
        writeFightLog(`${currentFightData.opponentFighter.name} wins. Game Over.`);
        finishRound();
    } else if (currentFightData.opponentFighter.health === 0) {
        writeFightLog(`${currentFightData.selectedFighter.name} wins. Congrats!`);
        finishRound();
    }
}

attackButton.addEventListener("click", () => {
    fightTurn();
    resetTurn();
});
