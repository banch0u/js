'use strict';

let randomDice = Math.floor((Math.random() * 6) + 1);
console.log(randomDice);
const dice = document.querySelector('img');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let playerZero = document.querySelector('.player--0');
let playerZeroCurrentScore = 0;
let playerZeroCurrentSelector = document.querySelector('#current--0');
let playerZeroScore = 0;
let playerZeroScoreSelector = document.querySelector('#score--0');

let playerOne = document.querySelector('.player--1');
let playerOneCurrentScore = 0;
let playerOneCurrentSelector = document.querySelector('#current--1');
let playerOneScore = 0;
let playerOneScoreSelector = document.querySelector('#score--1');




rollDice.addEventListener('click', function () {

  if (playerZero.classList.contains('player--active')) {

    randomDice = Math.floor((Math.random() * 6) + 1);
    dice.src = `dice-${randomDice}.png`;


    playerZeroCurrentScore += randomDice;
    if (randomDice === 1) {
      playerZeroCurrentScore = 0;
      playerZero.classList.remove('player--active');
      playerOne.classList.add('player--active');
    }
    playerZeroCurrentSelector.textContent = playerZeroCurrentScore;

    hold.addEventListener('click', function () {
      playerZeroScore += playerZeroCurrentScore;
      playerZeroScoreSelector.textContent = playerZeroScore;
      playerZeroCurrentScore = 0;
      playerZeroCurrentSelector.textContent = playerZeroCurrentScore;
      playerZero.classList.remove('player--active');
      playerOne.classList.add('player--active');
    });
  }
  else {
    randomDice = Math.floor((Math.random() * 6) + 1);
    dice.src = `dice-${randomDice}.png`;


    playerOneCurrentScore += randomDice;
    if (randomDice === 1) {
      playerOneCurrentScore = 0;
      playerOne.classList.remove('player--active');
      playerZero.classList.add('player--active');
    }
    playerOneCurrentSelector.textContent = playerOneCurrentScore;

    hold.addEventListener('click', function () {
      playerOneScore += playerOneCurrentScore;
      playerOneScoreSelector.textContent = playerOneScore;
      playerOneCurrentScore = 0;
      playerOneCurrentSelector.textContent = playerOneCurrentScore;
      playerOne.classList.remove('player--active');
      playerZero.classList.add('player--active');
    });

  }
});

