'use strict';



const btnOpenModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    for (let j = 0; j < hidden.length; j++) {
      hidden[j].style.display = "block";
    }
  });
}
overlay.addEventListener('click', function () {
  for (let j = 0; j < hidden.length; j++) {
    hidden[j].style.display = "none";
  }
})