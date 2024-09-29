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

let humanChoice = prompt('rock, paper, or scissors?')

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') return 'rock';
    if (humanChoice.toLowerCase() === 'paper') return 'paper';
    if (humanChoice.toLowerCase() === 'scissors') return 'scissors';
}

console.log(getHumanChoice());


// Plays one round, and delcares round winner

function playRound() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())



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


//Round 2
computerChoice = Math.floor(Math.random()*3);

function getComputerChoice() {
    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
}

console.log(getComputerChoice())



// Write function getHumanChoice, which returns user input as rock, paper, or scissors

humanChoice = prompt('rock, paper, or scissors?')

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') return 'rock';
    if (humanChoice.toLowerCase() === 'paper') return 'paper';
    if (humanChoice.toLowerCase() === 'scissors') return 'scissors';
}

console.log(getHumanChoice());


// Plays another round, and delcares round winner

function playRound() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())

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
}


console.log(keepScore())


//Round 3
computerChoice = Math.floor(Math.random()*3);

function getComputerChoice() {
    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
}

console.log(getComputerChoice())



// Write function getHumanChoice, which returns user input as rock, paper, or scissors

humanChoice = prompt('rock, paper, or scissors?')

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') return 'rock';
    if (humanChoice.toLowerCase() === 'paper') return 'paper';
    if (humanChoice.toLowerCase() === 'scissors') return 'scissors';
}

console.log(getHumanChoice());


// Plays another round, and delcares round winner

function playRound() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())

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
}


console.log(keepScore())


//Round 4
computerChoice = Math.floor(Math.random()*3);

function getComputerChoice() {
    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
}

console.log(getComputerChoice())



// Write function getHumanChoice, which returns user input as rock, paper, or scissors

humanChoice = prompt('rock, paper, or scissors?')

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') return 'rock';
    if (humanChoice.toLowerCase() === 'paper') return 'paper';
    if (humanChoice.toLowerCase() === 'scissors') return 'scissors';
}

console.log(getHumanChoice());


// Plays another round, and delcares round winner

function playRound() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())

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
}


console.log(keepScore())


//Round 5
computerChoice = Math.floor(Math.random()*3);

function getComputerChoice() {
    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
}

console.log(getComputerChoice())



// Write function getHumanChoice, which returns user input as rock, paper, or scissors

humanChoice = prompt('rock, paper, or scissors?')

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') return 'rock';
    if (humanChoice.toLowerCase() === 'paper') return 'paper';
    if (humanChoice.toLowerCase() === 'scissors') return 'scissors';
}

console.log(getHumanChoice());


// Plays another round, and delcares round winner

function playRound() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you win!';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return 'Computer chose rock, you win!';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return 'Computer chose paper, you win!';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return 'Computer chose paper, you lose';
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return 'Computer chose scissors, you lose';
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return 'Computer chose rock, you lose';
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'rock') return "Computer chose rock, it's a tie";
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'paper') return "Computer chose paper, it's a tie";
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'scissors') return "Computer chose scissors, it's a tie";
}

console.log(playRound())

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
}


console.log(keepScore())


function declareWinner() {
    if (humanScore > computerScore)
        console.log('congrats, you win!')
    else
        console.log('you lose... too bad')
}

console.log(declareWinner())