function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2: 
            return "Scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a draw. Try again!"
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
        )
         {
            return `You won! ${playerChoice} beats ${computerChoice}.`
        }
    
        return `You Lose! ${computerChoice} beats ${playerChoice}.`
    


}

const playerSelection = "Paper"
const computerSelection = getComputerChoice();
console.log("Player selected: " + playerSelection);
console.log("Computer selected: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

