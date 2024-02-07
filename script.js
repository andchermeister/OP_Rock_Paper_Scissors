function playGame () {
    

    let playerScore = 0
    let computerScore = 0
    let round = 1;
    let ties = 0;

    const displayPlayerScore = document.querySelector('.PlayerScore')
    const displayComputerScore = document.querySelector('.ComputerScore')
    const displayPlayerSelection = document.querySelector('.PlayerSelection')
    const displayComputerSelection = document.querySelector('.ComputerSelection')

    let rockImage = document.querySelector('.Rock_player img')
    let paperImage = document.querySelector('.Paper_player img')
    let scissorsImage = document.querySelector('.Scissors_player img')

    function playRock() {
        playRound('rock', getComputerChoice());
    }

    function playPaper() {
        playRound('paper', getComputerChoice());
    }

    function playScissors() {
        playRound('scissors', getComputerChoice());
    }

    rockImage.addEventListener('click', playRock);
    paperImage.addEventListener('click', playPaper);
    scissorsImage.addEventListener('click', playScissors);

    function removeImageListener() {
        rockImage.removeEventListener('click', playRock);
        paperImage.removeEventListener('click', playPaper);
        scissorsImage.removeEventListener('click', playScissors);
    }


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
            ties += 1
            document.querySelector('.Tie').textContent = `Ties: ${ties}`
        }
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        )   {
                playerScore += 1
                displayPlayerScore.textContent = `Player's Score: ${playerScore}`
                console.log(playerScore)
                
            }
        else if (
            (playerChoice === "scissors" && computerChoice === "rock") ||
            (playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "scissors")
        ) {
            computerScore += 1
            displayComputerScore.textContent = `Computer's Score: ${computerScore}`
        }
        
        displayPlayerSelection.textContent = `Player chose: ${playerChoice}`
        displayComputerSelection.textContent = `Computer chose: ${computerChoice}`

        round += 1
        document.querySelector('.Round').textContent = `Round ${round}`
        

        if (playerScore === 3 || computerScore ===3 ) {
            removeImageListener()
            if (playerScore === 3  ) {
                document.querySelector('.Gameover').textContent = `Wow dude, congrats, you won!`
            }
            else if (computerScore === 3) {
                document.querySelector('.Gameover').textContent = `Oh shit..., computer won, good luck next time`
            }  
            
        } 
    
        
}

}

playGame()
