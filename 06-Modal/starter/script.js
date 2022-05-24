'use strict';



const btnOpenModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


function displayStyleController(state) {
  for (let j = 0; j < hidden.length; j++) {
    hidden[j].style.display = state;
  }
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    displayStyleController("block");
  });
}
overlay.addEventListener('click', function () {
  displayStyleController("none");
});
btnCloseModal.addEventListener('click', function () {
  displayStyleController("none");

});