function game () {

    let playerScore = 0
    let computerScore = 0

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
        computerSelection = computerSelection.toLowerCase();
        if (playerChoice === computerSelection.toLowerCase()) {
            return "It's a draw. Try again!"
        }
    
        if (
            (playerChoice === "rock" && computerSelection === "scissors") ||
            (playerChoice === "paper" && computerSelection === "rock") ||
            (playerChoice === "scissors" && computerSelection === "paper")
            )
             {
                console.log()
                playerScore += 1
                return `You won! ${playerChoice} beats ${computerSelection}. Player Score: ${playerScore}`
            }

            console.log()
            computerScore += 1
            return `You lose! ${computerSelection} beats ${playerChoice}. Computer Score: ${computerScore}.`
            
        
    }

    
    

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors: ")
        const computerSelection = getComputerChoice();
        console.log("Round " + i + " :")
        console.log("Player selected: " + playerSelection);
        console.log("Computer selected: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log()
    }

    
    console.log("FINAL RESULTS:")
    

    if (playerScore > computerScore) {
        console.log(`Player won. Player score: ${playerScore}; Computer score: ${computerScore}.`)
    }
    else if(playerScore === computerScore) {
        console.log(`It's a draw. Player score: ${playerScore}; Computer score: ${computerScore}.`)
    }
    else {
        console.log(`Computer won. Computer score: ${computerScore}; Player score: ${playerScore}.`)
    }
}

game()
