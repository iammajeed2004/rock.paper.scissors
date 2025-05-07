const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}
