const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult (){
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
    } else
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!'
    } else
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = "You lost!"
    } else
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = "You win!"
    } else
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = "You lose!"
    } else
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = "You win!"
    } else
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = "You lose!"
    }

    resultDisplay.innerHTML = result
}

