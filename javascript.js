console.log("YO YO YO WORLD")



// Generates a random integer 0 - 2 and assign, 0 = rock, 1 = paper, 2 = scissors

let computerChoice = Math.floor(Math.random()*3);

function getComputerChoice() {
    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
}

console.log(getComputerChoice())



// Write function getHumanChoice, which returns user input as rock, paper, or scissors

let buttons = document.querySelectorAll("button");

let humanChoice = buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id)
        return (button.id);
    });
});

// Plays one round, and delcares round winner

function playRound() {
    if (humanChoice === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (humanChoice === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (humanChoice === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (humanChoice === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (humanChoice === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (humanChoice === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (humanChoice === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (humanChoice === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (humanChoice === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())

/*

// Starts human and computer scores at 0, and increments by 1 depending on winner

let humanScore = 0
let computerScore = 0


function keepScore() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper'))
        console.log(++humanScore, computerScore);
    else if (
        (humanSelection === 'rock' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'rock'))
        console.log(humanScore, ++computerScore);
    else console.log(humanScore, computerScore);
}


console.log(keepScore())




function playGame() {

}

/*


function declareWinner() {
    if (humanScore > computerScore)
        console.log('congrats, you win!')
    else
        console.log('you lose... too bad')
}

console.log(declareWinner())
*/