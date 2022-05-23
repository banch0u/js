'use strict';

let randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
//console.log(randomNumber);
// const randomNumber = 15;
let score = 20;
let highscore = 0;

// function check() {
//   let guessNumber = document.querySelector(".guess").value;
//   if (guessNumber <= 0 || guessNumber > 20) {
//     document.querySelector(".message").textContent = "Please select numbers between 1 to 20";
//   }
//   else if (guessNumber == randomNumber) {
//     document.querySelector(".message").textContent = "Correct";
//     document.querySelector("body").style.backgroundColor = "Green";
//     document.querySelector(".number").textContent = randomNumber;
//     document.querySelector(".highscore").textContent = score;



//   }
//   else if (guessNumber > randomNumber) {
//     document.querySelector(".message").textContent = "too high";
//     score--;
//     document.querySelector(".score").textContent = score;

//   }
//   else if (guessNumber < randomNumber) {
//     document.querySelector(".message").textContent = "too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   }
// }

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector(".guess").value);
  if (guessNumber <= 0 || guessNumber > 20) {
    document.querySelector(".message").textContent = "Please select numbers between 1 to 20";
  }
  else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct";
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.width = "100%";

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


  }
  else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost try again";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;


    }
  }
  else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost try again";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;


    }
  }

});
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem"
  document.querySelector(".guess").value = "";

});