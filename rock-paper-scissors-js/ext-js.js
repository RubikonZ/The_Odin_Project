const container = document.querySelector('body')

// Main div
const main = document.createElement('div')
main.classList.add('kek')
// Buttons
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
btn1.textContent = 'Rock';
btn2.textContent = 'Paper';
btn3.textContent = 'Scissors';
btn1.class = 'btn-rock';
btn2.class = 'btn-paper';
btn3.class = 'btn-scissors';
main.appendChild(btn1);
main.appendChild(btn2);
main.appendChild(btn3);
container.appendChild(main)

let round_number = 0;
let playerWon = 0;
let compWon = 0;



const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', () => gameRound(btn.textContent)))

function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random()*plays.length);
    return plays[rand];
}

function gameRound(playerSelection) {
    round_number += 1;
    const plrSlct = playerSelection.toLowerCase();
    const compSlct = computerPlay().toLowerCase();
    let result;
    if (plrSlct === compSlct) {
        result = "It's a draw!"
    } else if ((plrSlct == 'rock' && compSlct == 'paper') || (plrSlct == 'scissors' && compSlct == 'rock') || (plrSlct == 'paper' && compSlct == 'scissors')) {
        result = `You lose!`
        compWon += 1
    } else {
        result = `You win!`
        playerWon += 1
    }
    const currentScore = `Player: ${playerWon} | Computer: ${compWon}`
    result += ` ${plrSlct.replace(/^\w/, c => c.toUpperCase())} versus ${compSlct.replace(/^\w/, c => c.toUpperCase())}. ` + currentScore
    // Div for result outputs
    const result_div = document.createElement('div');
    result_div.classList.add = "result-div";
    result_div.textContent = `Round ${round_number}: ${result}`;
    container.appendChild(result_div);
    if (playerWon >= 5 || compWon >= 5) {
        const final_score = document.createElement('div');
        final_score.textContent = `Game has ended. Final score is ${currentScore}`;
        container.appendChild(final_score);
    }

    return result + ` ${plrSlct.replace(/^\w/, c => c.toUpperCase())} versus ${compSlct.replace(/^\w/, c => c.toUpperCase())}`;
}


function game() {
    let gameInProcess = true;
    while (gameInProcess) {
        let playerSelection = prompt('Choose your play');
        computerSelection = computerPlay();
        console.log(gameRound(playerSelection, computerSelection));
    }
}