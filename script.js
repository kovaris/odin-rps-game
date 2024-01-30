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


document.getElementById("rock").addEventListener("click", playRock);
document.getElementById("paper").addEventListener("click", playPaper);
document.getElementById("scissors").addEventListener("click", playScissors);
document.getElementById("header-title").addEventListener("click", newGame);


function newGame() {

    let newFeeling = feelings[(Math.floor(Math.random() * 6))];

    document.getElementById("feeling1").innerHTML = newFeeling;
    document.getElementById("feeling2").innerHTML = newFeeling;
    document.getElementById("feeling3").innerHTML = newFeeling;
    document.getElementById("last-result").innerHTML = "Choose Your Weapon:"
    document.getElementById("infantino-last-move").innerHTML = "X";
    document.getElementById("user-last-move").innerHTML = "X";

    userWins = 0;
    userWinsSpan.innerHTML = userWins;
    cpuWins = 0;
    cpuWinsSpan.innerHTML = cpuWins;
    roundCount = 0;
    roundCountSpan.innerHTML = roundCount;

}

function checkScore() {
    if (userWins === 5) {
        alert(`You defeated ${feeling} Infantino and crooked FIFA!  World football has been saved!`);
        alert('Infantino: "I know what it\'s like to lose...I was born with red hair."');
        document.getElementById("last-result").innerHTML = "Infantino and his dark Qatari overlords have been vanquished";
    } else if (cpuWins === 5) {
        alert(`You failed to defeat ${feeling} Infantino and crooked FIFA.  World football is dead.`);
        alert('Infantino: "The next World Cup will be hosted by Yemen, Salt Baes Restaurant, and Narnia.  The Final will be played on Epstein Island.  SUUUUIIIIII!"'); 
    }
}

function playRock() {

    let userChoice = "rock";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        result.innerHTML = "It's a TIE!  Penalty to Argentina!";
    } else if (cpuChoice === "paper") {
        result.innerHTML = "You LOSE!";
        cpuWins++;
        cpuWinsSpan.innerHTML = cpuWins;
    } else if (cpuChoice === "scissors") {
        result.innerHTML = "You WIN";
        userWins++;
        userWinsSpan.innerHTML = userWins;
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;
    checkScore();

}

function playPaper() {

    let userChoice = "paper";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        result.innerHTML = "It's a TIE!  Penalty to Argentina!";
    } else if (cpuChoice === "scissors") {
        result.innerHTML = "You LOSE";
        cpuWins++;
        cpuWinsSpan.innerHTML = cpuWins;
    } else if (cpuChoice === "rock") {
        result.innerHTML = "You WIN";
        userWins++;
        userWinsSpan.innerHTML = userWins;
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;
    checkScore();

}

function playScissors() {

    let userChoice = "scissors";
    let cpuChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    let cpuChoice = cpuChoices[randomChoice];
    let result = document.getElementById("last-result");


    if (userWins >= 5 || cpuWins >= 5) {
        return;
    } else if (cpuChoice === userChoice) {
        result.innerHTML = "It's a TIE!  Penalty to Argentina!";
    } else if (cpuChoice === "rock") {
        result.innerHTML = "You LOSE";
        cpuWins++;
        cpuWinsSpan.innerHTML = cpuWins;
    } else if (cpuChoice === "paper") {
        result.innerHTML = "You WIN";
        userWins++;
        userWinsSpan.innerHTML = userWins;
    }

    roundCount++;
    roundCountSpan.innerHTML = roundCount;
    userLastMove.innerHTML = userChoice;
    cpuLastMove.innerHTML = cpuChoice;
    checkScore();

}