const playerNameForm = document.querySelector('#playerNameForm');
const nameInput = document.querySelector('#nameInput');
const playerNameH2 = document.querySelector('#playerName');

playerNameForm.addEventListener('submit', event => {
    event.preventDefault();
    const playerName = nameInput.value;
    
    playerNameForm.remove();
    
    playerNameH2.textContent = `Welcome, ${playerName}!`;
});