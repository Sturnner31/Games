const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

updateScores();

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    localStorage.removeItem("playerScore");
    localStorage.removeItem("computerScore");
    updateScores();

    // Reset styles for result display
    resultDisplay.style.color = ""; 

    // Reset styles for choices buttons
    const choicesButtons = document.querySelectorAll('.choices button');
    choicesButtons.forEach(button => {
        button.style.backgroundColor = ""; 
        button.style.color = ""; 
    });
}

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
        function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
        resultDisplay.style.color = result === "YOU WIN!" ? "green" : "red";
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            localStorage.setItem("playerScore", playerScore);
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            localStorage.setItem("computerScore", computerScore);
            break;
    }
    updateScores();
}

    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
        resultDisplay.style.color = result === "YOU WIN!" ? "green" : "red";
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            localStorage.setItem("playerScore", playerScore);
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            localStorage.setItem("computerScore", computerScore);
            break;
    }
    updateScores();
}
