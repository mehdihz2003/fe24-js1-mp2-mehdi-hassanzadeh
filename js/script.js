const playerNameForm = document.querySelector('#playerNameForm');
const nameInput = document.querySelector('#nameInput');
const playerNameH2 = document.querySelector('#playerName');
const throwDiceBtn = document.querySelector('#throwDice');

playerNameForm.addEventListener('submit', event => {
    event.preventDefault();
    const playerName = nameInput.value;
    
    playerNameForm.remove();
    
    playerNameH2.textContent = `Welcome, ${playerName}!`;
    playerNameH2.classList.remove('hidden');
    throwDiceBtn.classList.remove('hidden');
});

const diceArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];

throwDiceBtn.addEventListener('click', event => {
    const dice = document.createElement('div');

    const diceNumber = getDiceNumber();

    dice.classList.add('die', diceArray[diceNumber]);
    console.log(dice.classList);
    console.log(diceNumber);

    for(let i=0; i<diceNumber; i++) {
        const dieDot = document.createElement('div');
        dice.append(dieDot);
    }
    document.body.append(dice);
})

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}