const playerNameForm = document.querySelector('#playerNameForm');
const nameInput = document.querySelector('#nameInput');
const playerNameH2 = document.querySelector('#playerName');
const throwDiceBtn = document.querySelector('#throwDice');
const holdDiceBtn = document.querySelector('#holdDice')
const totalScoreH3 = document.querySelector('#totalScore');
const roundScoreH3 = document.querySelector('#roundScore');

playerNameForm.addEventListener('submit', event => {
    event.preventDefault();
    const playerName = nameInput.value;
    
    playerNameForm.remove();
    
    playerNameH2.textContent = `Welcome, ${playerName}!`;
    
    playerNameH2.classList.remove('hidden');
    throwDiceBtn.classList.remove('hidden');
    holdDiceBtn.classList.remove('hidden');
    totalScoreH3.classList.remove('hidden');
    roundScoreH3.classList.remove('hidden');
});

const diceArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
let totalScore = 0;
let roundScore = 0;

throwDiceBtn.addEventListener('click', throwDice);

holdDiceBtn.addEventListener('click', holdDice);

function throwDice(){
    const dice = document.createElement('div');
    document.body.append(dice);

    const diceNumber = getDiceNumber();
    dice.classList.add('die', diceArray[diceNumber]);

    roundScore += diceNumber;

    for(let i=0; i<diceNumber; i++) {
        const dieDot = document.createElement('div');
        dice.append(dieDot);
    }

    roundScoreH3.textContent = `Round score: ${roundScore}`;
}

function holdDice(){

    totalScore = roundScore;
    roundScore = 0;

    totalScoreH3.textContent = `Total score: ${totalScore}`;
    roundScoreH3.textContent = `Round score: ${roundScore}`;

}

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}