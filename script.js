let feelings = ["Qatari", "Arab", "African", "Gay", "Disabled", "Migrant Worker"];
let randomFeel = Math.floor(Math.random() * 6);
let feeling = feelings[randomFeel];
let userLastMove = document.getElementById("user-last-move");
let cpuLastMove = document.getElementById("infantino-last-move");
let roundCount = 0;
let userWins = 0;
let cpuWins = 0;
let roundCountSpan = document.getElementById("round-count");
let cpuWinsSpan = document.getElementById("score-infantino");
let userWinsSpan = document.getElementById("score-user");


document.getElementById("feeling1").innerHTML = feeling;
document.getElementById("feeling2").innerHTML = feeling;
document.getElementById("feeling3").innerHTML = feeling;

document.getElementById("feeling1-container").classList.add("hide-element");
document.getElementById("info").classList.add("hide-element");
document.getElementById("tag-infantino").classList.add("hide-element");
document.getElementById("tag-user").classList.add("hide-element");
document.getElementById("tag-round").classList.add("hide-element");
document.getElementById("buttons-container").classList.add("hide-element");
document.getElementById("scoreboard-count").classList.add("hide-element");


document.getElementById("rock").addEventListener("click", playRock);
document.getElementById("paper").addEventListener("click", playPaper);
document.getElementById("scissors").addEventListener("click", playScissors);
document.getElementById("header-title").addEventListener("click", newGame);
document.getElementById("start-button").addEventListener("click", startGame);


function startGame() {
    document.getElementById("start-button").classList.add("animate__animated", "animate__zoomOut")

    setTimeout(() => {
        document.getElementById("feeling1-container").classList.remove("hide-element");
        document.getElementById("feeling1-container").classList.add("animate__animated", "animate__fadeIn", "animate__slow");
        document.getElementById("start-button").classList.add("hide-element");
        document.getElementById("start-button").classList.remove("animate__animated", "animate__zoomOut");
    }, 500);

    setTimeout(() => {
        document.getElementById("feeling1").classList.add("animate__animated", "animate__tada");
    }, 1500);

    setTimeout(() => {
        document.getElementById("info").classList.remove("hide-element");
        document.getElementById("info").classList.add("animate__animated", "animate__fadeIn", "animate__slow");
    }, 2500);

    setTimeout(() => {
        document.getElementById("tag-infantino").classList.remove("hide-element");
        document.getElementById("tag-infantino").classList.add("animate__animated", "animate__fadeInLeftBig");
        document.getElementById("tag-user").classList.remove("hide-element");
        document.getElementById("tag-user").classList.add("animate__animated", "animate__fadeInRightBig");
        document.getElementById("tag-round").classList.remove("hide-element");
        document.getElementById("tag-round").classList.add("animate__animate", "animate__zoomIn");
        document.getElementById("scoreboard-count").classList.remove("hide-element");
        document.getElementById("scoreboard-count").classList.add("animate__animated", "animate__zoomIn");
        document.getElementById("last-result").innerHTML = "Choose Your Weapon:"
        document.getElementById("last-result").classList.add("animate__animated", "animate__flipInX");
        document.getElementById("buttons-container").classList.remove("hide-element");
        document.getElementById("buttons-container").classList.add("animate__animated", "animate__fadeInUpBig");
    }, 4000);

    setTimeout(() => {
        document.getElementById("feeling1-container").classList.remove("animate__animated", "animate__fadeIn", "animate__slow");
        document.getElementById("feeling1").classList.remove("animate__animated", "animate__tada");
        document.getElementById("info").classList.remove("animate__animated", "animate__fadeIn", "animate__slow");
        document.getElementById("tag-infantino").classList.remove("animate__animated", "animate__fadeInLeftBig");
        document.getElementById("tag-user").classList.remove("animate__animated", "animate__fadeInRightBig");
        document.getElementById("tag-round").classList.remove("animate__animated", "animate__zoomIn");
        document.getElementById("scoreboard-count").classList.remove("animate__animated", "animate__zoomIn");
        document.getElementById("buttons-container").classList.remove("animate__animated", "animate__fadeInUpBig");
        document.getElementById("last-result").classList.remove("animate__animated", "animate__flipInX");
    }, 5500);

}

function newGame() {

    let newFeeling = feelings[(Math.floor(Math.random() * 6))];

    document.getElementById("feeling1").innerHTML = newFeeling;
    document.getElementById("feeling2").innerHTML = newFeeling;
    document.getElementById("feeling3").innerHTML = newFeeling;
    document.getElementById("last-result").innerHTML = "";
    document.getElementById("infantino-last-move").innerHTML = "";
    document.getElementById("user-last-move").innerHTML = "";
    document.getElementById("rock").classList.remove("button-red");
    document.getElementById("paper").classList.remove("button-red");
    document.getElementById("scissors").classList.remove("button-red");
    document.getElementById("footer-text").style.textDecoration = "none";
    document.getElementById("last-result").classList.remove("last-result-win", "last-result-lose");

    document.getElementById("feeling1-container").classList.add("hide-element");
    document.getElementById("info").classList.add("hide-element");
    document.getElementById("tag-infantino").classList.add("hide-element");
    document.getElementById("tag-user").classList.add("hide-element");
    document.getElementById("tag-round").classList.add("hide-element");
    document.getElementById("buttons-container").classList.add("hide-element");
    document.getElementById("scoreboard-count").classList.add("hide-element");
    document.getElementById("start-button").classList.remove("hide-element");

    userWins = 0;
    userWinsSpan.innerHTML = userWins;
    cpuWins = 0;
    cpuWinsSpan.innerHTML = cpuWins;
    roundCount = 0;
    roundCountSpan.innerHTML = roundCount;

}

function checkScore() {
    if (userWins === 5) {
        alert(`You defeated ${document.getElementById("feeling3").innerHTML} Infantino and crooked FIFA!  World football has been saved!`);
        alert('Infantino: "I know what it\'s like to lose...I was born with red hair."');
        document.getElementById("last-result").innerHTML = "Infantino and his dark Qatari overlords have been vanquished.  Football is saved!";
        userLastMove.innerHTML = "";
        cpuLastMove.innerHTML = "";
        document.getElementById("rock").classList.add("button-red");
        document.getElementById("paper").classList.add("button-red");
        document.getElementById("scissors").classList.add("button-red");
    } else if (cpuWins === 5) {
        alert(`You failed to defeat ${document.getElementById("feeling3").innerHTML} Infantino and crooked FIFA.  World football is dead.`);
        alert('Infantino: "The next World Cup will be hosted by Yemen, Salt Baes Restaurant, and Narnia.  The Final will be played on Epstein Island.  SUUUUIIIIII!"'); 
        document.getElementById("last-result").innerHTML = "WORLD FOOTBALL IS DEAD";
        userLastMove.innerHTML = "";
        cpuLastMove.innerHTML = "";
        document.getElementById("rock").classList.add("button-red");
        document.getElementById("paper").classList.add("button-red");
        document.getElementById("scissors").classList.add("button-red");
        document.getElementById("footer-text").style.textDecoration = "line-through";

    }

}

function playRock() {

    let userChoice = "rock";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");


    if (userWins <= 4 && cpuWins <= 4) {
        result.innerHTML = "";
        userLastMove.classList.add("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.add("animate__animated", "animate__fadeInLeftBig");
        roundCountSpan.classList.add("animate__animated", "animate__flipInX", "animate__faster");
        result.classList.add("animate__animated");
        result.classList.remove("last-result-win", "last-result-lose");
    }

    setTimeout(() => {
        userLastMove.classList.remove("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.remove("animate__animated", "animate__fadeInLeftBig");
        document.getElementById("round-count").classList.remove("animate__animated", "animate__flipInX", "animate__faster");
    }, 800);

    setTimeout(() => {
        result.classList.remove("animate__animated", "animate__fadeIn", "animate__shakeX");
        cpuWinsSpan.classList.remove("animate__animated", "animate__flipInX");
        userWinsSpan.classList.remove("animate__animated", "animate__flipInX");
    }, 1800);


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        setTimeout(() => {
            result.classList.add("animate__shakeX");
            result.innerHTML = "It's a TIE!  Penalty to Argentina!";
        }, 1000);
    } else if (cpuChoice === "paper") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-lose");
            result.innerHTML = "You LOSE!";
        }, 1000);
        setTimeout(() => {
            cpuWinsSpan.classList.add("animate__animated", "animate__flipInX");
            cpuWins++;
            cpuWinsSpan.innerHTML = cpuWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    } else if (cpuChoice === "scissors") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-win");
            result.innerHTML = "You WIN";
        }, 1000);
        setTimeout(() => {
            userWinsSpan.classList.add("animate__animated", "animate__flipInX");
            userWins++;
            userWinsSpan.innerHTML = userWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;

}

function playPaper() {

    let userChoice = "paper";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");

    if (userWins <= 4 && cpuWins <= 4) {
        result.innerHTML = "";
        userLastMove.classList.add("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.add("animate__animated", "animate__fadeInLeftBig");
        roundCountSpan.classList.add("animate__animated", "animate__flipInX", "animate__faster");
        result.classList.add("animate__animated");
        result.classList.remove("last-result-win", "last-result-lose");
    }


    setTimeout(() => {
        userLastMove.classList.remove("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.remove("animate__animated", "animate__fadeInLeftBig");
        document.getElementById("round-count").classList.remove("animate__animated", "animate__flipInX", "animate__faster");
    }, 800);

    setTimeout(() => {
        result.classList.remove("animate__animated", "animate__fadeIn", "animate__shakeX");
        cpuWinsSpan.classList.remove("animate__animated", "animate__flipInX");
        userWinsSpan.classList.remove("animate__animated", "animate__flipInX");
    }, 1800);


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        setTimeout(() => {
            result.classList.add("animate__shakeX");
            result.innerHTML = "It's a TIE!  Penalty to Argentina!";
        }, 1000);
    } else if (cpuChoice === "scissors") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-lose");
            result.innerHTML = "You LOSE!";
        }, 1000);
        setTimeout(() => {
            cpuWinsSpan.classList.add("animate__animated", "animate__flipInX");
            cpuWins++;
            cpuWinsSpan.innerHTML = cpuWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    } else if (cpuChoice === "rock") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-win");
            result.innerHTML = "You WIN";
        }, 1000);
        setTimeout(() => {
            userWinsSpan.classList.add("animate__animated", "animate__flipInX");
            userWins++;
            userWinsSpan.innerHTML = userWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;

}

function playScissors() {

    let userChoice = "scissors";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");


    if (userWins <= 4 && cpuWins <= 4) {
        result.innerHTML = "";
        userLastMove.classList.add("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.add("animate__animated", "animate__fadeInLeftBig");
        roundCountSpan.classList.add("animate__animated", "animate__flipInX", "animate__faster");
        result.classList.add("animate__animated");
        result.classList.remove("last-result-win", "last-result-lose");
    }

    setTimeout(() => {
        userLastMove.classList.remove("animate__animated", "animate__fadeInRightBig");
        cpuLastMove.classList.remove("animate__animated", "animate__fadeInLeftBig");
        document.getElementById("round-count").classList.remove("animate__animated", "animate__flipInX", "animate__faster");
    }, 800);

    setTimeout(() => {
        result.classList.remove("animate__animated", "animate__fadeIn", "animate__shakeX");
        cpuWinsSpan.classList.remove("animate__animated", "animate__flipInX");
        userWinsSpan.classList.remove("animate__animated", "animate__flipInX");
    }, 1800);


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        setTimeout(() => {
            result.classList.add("animate__shakeX");
            result.innerHTML = "It's a TIE!  Penalty to Argentina!";
        }, 1000);
    } else if (cpuChoice === "rock") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-lose");
            result.innerHTML = "You LOSE!";
        }, 1000);
        setTimeout(() => {
            cpuWinsSpan.classList.add("animate__animated", "animate__flipInX");
            cpuWins++;
            cpuWinsSpan.innerHTML = cpuWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    } else if (cpuChoice === "paper") {
        setTimeout(() => {
            result.classList.add("animate__fadeIn", "last-result-win");
            result.innerHTML = "You WIN";
        }, 1000);
        setTimeout(() => {
            userWinsSpan.classList.add("animate__animated", "animate__flipInX");
            userWins++;
            userWinsSpan.innerHTML = userWins;
        }, 1350);
        setTimeout(() => checkScore(), 1800);
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;

}