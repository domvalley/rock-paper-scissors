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

let humanWin = ++humanScore
let computerWin = ++computerScore


function keepScore(humanSelection, computerSelection) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper'))
        return humanWin;
    else if (
        (humanSelection === 'rock' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'rock'))
        return computerWin;
}


console.log(keepScore(humanScore, computerScore))





/*


function keepScore() {
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'scissors') return ++humanScore;
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'rock') return ++humanScore;
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'paper') return ++humanScore;
    if (getHumanChoice() === 'rock' && getComputerChoice() === 'paper') return ++computerScore;
    if (getHumanChoice() === 'paper' && getComputerChoice() === 'scissors') return ++computerScore;
    if (getHumanChoice() === 'scissors' && getComputerChoice() === 'rock') return ++computerScore;
}

function keepScore() {
    if (playRound() === 'Computer chose scissors, you win!' || 'Computer chose rock, you win!' || 'Computer chose paper, you win!') 
        return 'Your Score: ' + humanWin + ' Computer Score: ' + computerScore;
    if (playRound() === 'Computer chose paper, you lose' || 'Computer chose scissors, you lose' || 'Computer chose rock, you lose') 
        return 'Your Score: ' + humanScore + ' Computer Score: ' + computerWin;
}


function keepScore() {
    if (playRound() === 'Computer chose scissors, you win!') 
        return ++humanScore;
    if (playRound() === 'Computer chose rock, you win!')
        return ++humanScore;
    if (playRound() === 'Computer chose paper, you win!')
        return ++humanScore;
    if (playRound() === 'Computer chose paper, you lose')
        return ++computerScore;
    if (playRound() === 'Computer chose scissors, you lose')
        return ++computerScore;
    if (playRound() === 'Computer chose rock, you lose')
        return ++computerScore;
}


function keepScore() {
    if (playRound() === ('Computer chose scissors, you win!' || 'Computer chose rock, you win!' || 'Computer chose paper, you win!')
        return 'Your Score: ' + ++humanScore + ' Computer Score: ' + computerScore;
    else if (playRound() === 'Computer chose paper, you lose' || 'Computer chose scissors, you lose' || 'Computer chose rock, you lose')
        return 'Your Score: ' + humanScore + ' Computer Score: ' + ++computerScore;
    else return 'Your Score: ' + humanScore + ' Computer Score: ' + computerScore;
}

if (playRound() === 'Computer chose scissors, you win!' || 'Computer chose rock, you win!' || 'Computer chose paper, you win!') {
    return 'Your Score: ' + ++humanScore + ' Computer Score: ' + computerScore;
}
if (playRound() === 'Computer chose paper, you lose' || 'Computer chose scissors, you lose' || 'Computer chose rock, you lose') {
    return 'Your Score: ' + humanScore + ' Computer Score: ' + ++computerScore;
}
else {return 'Your Score: ' + humanScore + ' Computer Score: ' + computerScore;
}*/
