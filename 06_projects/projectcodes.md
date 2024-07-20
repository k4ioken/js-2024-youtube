# Projects (DOM)

# 1) Guess The Number

## Project link

```javascript 
    const wrapper = document.querySelector('#wrapper');
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessMadeArr = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const NewGameButton = document.createElement('p');
let randomnumber = parseInt(Math.random() * 100) + 1;
let numguess = 0;
let prevguess = [];
const resultmsg = document.querySelector('.lowOrHi');
const lowsection = document.querySelector('.resultParas');
let playstatus = true;
if (playstatus) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userValue = parseInt(userinput.value);
    validateGuess(userValue);
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess <= 0 || guess == '' || guess > 100) {
    displaymsg('Enter Valid Entry');
  } else {
    prevguess.push(guess);
    if (numguess == 9) {
      displayGuess(guess);
      displaymsg(`Game Over , Random Number was ${randomnumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomnumber) {
    displaymsg('Correct Guess');
    wrapper.style.backgroundColor = 'green';
    endGame();
  } else if (guess < randomnumber) {
    displaymsg('Guess is too Low');
    wrapper.style.backgroundColor = 'red';
  } else if (guess > randomnumber) {
    displaymsg('Guess is too High');
    wrapper.style.backgroundColor = 'red';
  }
}
function displayGuess(guess) {
  userinput.value = '';
  guessMadeArr.innerHTML += `${guess}  `;
  numguess++;
  remainingGuess.innerHTML = `${10 - numguess}`;
}
function displaymsg(message) {
  resultmsg.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  playstatus = false;
  userinput.setAttribute('disabled', '');
  lowsection.appendChild(NewGameButton);
  NewGameButton.innerHTML = 'Start New Game';
  NewGameButton.addEventListener('click', function (e) {
    newGame();
  });
}
function newGame() {
  randomnumber = parseInt(Math.random() * 100) + 1;
  userValue = '';
  prevguess = [];
  numguess = 0;
  lowsection.removeChild(NewGameButton);
  userinput.removeAttribute('disabled');
  guessMadeArr.innerHTML = '';
  remainingGuess.innerHTML = `${10 - numguess}`;
  wrapper.style.backgroundColor = '#474747';
  playstatus = true;
}


```