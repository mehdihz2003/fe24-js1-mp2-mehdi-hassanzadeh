const container = document.querySelector('.container')
const playerNameForm = document.querySelector('#playerNameForm');
const nameInput = document.querySelector('#nameInput');
const playerNameH2 = document.querySelector('#playerName');
const throwDiceBtn = document.querySelector('#throwDice');
const holdDiceBtn = document.querySelector('#holdDice');
const totalScoreH3 = document.querySelector('#totalScore');
const roundAmountH3 = document.querySelector('#roundAmount');
const roundScoreH3 = document.querySelector('#roundScore');
const playerWonH3 = document.querySelector('#playerWon');
const playAgainBtn = document.querySelector('#playAgain');

const diceArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
let totalScore = 0;
let roundScore = 0;
let roundAmount = 0;

playerNameForm.addEventListener('submit', playerNameSubmit);
throwDiceBtn.addEventListener('click', throwDice);
holdDiceBtn.addEventListener('click', holdDice);
playAgainBtn.addEventListener('click', playAgain);

function playerNameSubmit(event){
    event.preventDefault();
    const playerName = nameInput.value;
    
    playerNameForm.remove();
    
    playerNameH2.textContent = `${playerName}`;
    
    playerNameH2.classList.remove('hidden');
    throwDiceBtn.classList.remove('hidden');
    holdDiceBtn.classList.remove('hidden');
    totalScoreH3.classList.remove('hidden');
    roundAmountH3.classList.remove('hidden');
    roundScoreH3.classList.remove('hidden');
}

function throwDice(){
    //remove previous dice if it exists
    const prevDice = document.querySelector('.die');
    if (prevDice) {
        prevDice.remove();
    }

    const dice = document.createElement('div');
    container.append(dice);

    const diceNumber = getDiceNumber();
    dice.classList.add('die', diceArray[diceNumber]);

    addDice(dice, diceNumber);
    
    //check if player lost the round or can keep going
    if(diceNumber!=1) {
        roundScore += 1000;
        roundScoreH3.textContent = `Round score: ${roundScore}`;
    }
    else {
        roundScore = 0;
        roundScoreH3.textContent = "You lost the round!";
        roundAmount++;
        roundAmountH3.textContent = `Round: ${roundAmount}`;
    }

    
}

function holdDice(){
    totalScore += roundScore;
    roundScore = 0;
    roundAmount++;
    
    totalScoreH3.textContent = `Total score: ${totalScore}`;
    roundScoreH3.textContent = `Round score: ${roundScore}`;
    roundAmountH3.textContent = `Round: ${roundAmount}`;

    //check if player won
    if(totalScore >= 99) {
        playerWonH3.classList.remove('hidden');
        playAgainBtn.classList.remove('hidden');
    }
}

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function addDice(dice, diceNumber) {
    for(let i=0; i<diceNumber; i++) {
        const dieDot = document.createElement('div');
        dice.append(dieDot);
    }
}

function playAgain(){
    totalScore = 0;
    roundScore = 0;
    roundAmount = 0;

    totalScoreH3.textContent = 'Total score: 0';
    roundScoreH3.textContent = 'Round score: 0';
    roundAmountH3.textContent = 'Round: 1';
    
    playerWonH3.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
}