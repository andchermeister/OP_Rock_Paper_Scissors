function playGame () {

    let playerScore = 0
    let computerScore = 0

    const displayPlayerScore = document.querySelector('.PlayerScore')
    const displayComputerScore = document.querySelector('.ComputerScore')
    const displayPlayerSelection = document.querySelector('.PlayerSelection')
    const displayComputerSelection = document.querySelector('.ComputerSelection')

    let rockImage = document.querySelector('.Rock_player img')
    let paperImage = document.querySelector('.Paper_player img')
    let scissorsImage = document.querySelector('.Scissors_player img')

    rockImage.addEventListener('click', () => playRound('rock', getComputerChoice()))
    paperImage.addEventListener('click', () => playRound('paper', getComputerChoice()))
    scissorsImage.addEventListener('click', () => playRound('scissors', getComputerChoice()))

    

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
        //console.log(playerScore)

    
        if (
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
            
            
        
    }
        
}


playGame()
