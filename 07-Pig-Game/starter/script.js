'use strict';

let randomDice = Math.floor((Math.random() * 6) + 1);
console.log(randomDice);
const dice = document.querySelector('img');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let playerZeroCurrentScore = 0;
let playerZeroCurrentSelector = document.querySelector('#current--0');
let playerZeroScore = 0;
let playerZeroScoreSelector = document.querySelector('.score');




rollDice.addEventListener('click', function () {
  randomDice = Math.floor((Math.random() * 6) + 1);
  dice.src = `dice-${randomDice}.png`;

  playerZeroCurrentScore += randomDice;
  if (randomDice === 1) {
    playerZeroCurrentScore = 0;
  }
  playerZeroCurrentSelector.textContent = playerZeroCurrentScore;

  hold.addEventListener('click', function () {
    playerZeroScore += playerZeroCurrentScore;
    playerZeroScoreSelector.textContent = playerZeroScore;
    playerZeroCurrentScore = 0;
    playerZeroCurrentSelector.textContent = playerZeroCurrentScore;

  });
});

