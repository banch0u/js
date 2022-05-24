'use strict';

const randomDice = Math.floor((Math.random() * 6) + 1);
console.log(randomDice);
const dice = document.querySelector('img').src = `dice-${randomDice}.png`;

