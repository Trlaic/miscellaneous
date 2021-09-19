//buttons
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');

//text fields
const labelNumber = document.querySelector('.number');
const labelMessage = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
//input fields
const inputNum = document.querySelector('.guess');
console.log();
//variables
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let guessNum;
let playable = true;
//functions
const init = function (state) {
    labelHighscore.textContent = highscore;
    labelScore.textContent = score;
    playable = state;
}
const displayMessage = function (color, message, state, pmess) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('header').querySelector('h1').textContent = message;
    labelMessage.textContent = pmess;
    init(state);
    return;
}
const diffNumber = function (mess) {
    score--;
    if (score === 0) {
        displayMessage('#ffa500', 'Game over', false, mess);
    }
    else {
        displayMessage('#222', 'Keep guessing', true, mess)
    }
}

init(true);
console.log(randomNumber);
//eventListeners

btnCheck.addEventListener('click', function () {
    if (playable) {
        guessNum = Number(inputNum.value);
        if (isNaN(guessNum) || (guessNum > 20 || guessNum < 1)) {
            displayMessage('#ff0000', 'Illegal input, everything is reset.', false, 'Completely wrong! ❌');
            labelNumber.textContent = '❌'
        }
        else if (guessNum === randomNumber) {
            if (score > highscore) {
                highscore = score;
            }
            displayMessage('#98FB98', 'You won ✅', false, 'Correct! ✅');
            labelNumber.textContent = randomNumber;
        }
        else if (guessNum !== randomNumber) {
            diffNumber(`Your number is ${guessNum > randomNumber ? 'bigger' : 'smaller'} than hidden number ${guessNum > randomNumber ? '📈' : '📉'}`);
        }
    }
});

btnAgain.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    score = 20;
    displayMessage('#222', 'Guess My Number!', true, 'Start guessing...');
    labelNumber.textContent = '?'
});