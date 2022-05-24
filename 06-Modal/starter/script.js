'use strict';



const btnOpenModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    for (let j = 0; j < hidden.length; j++) {
      hidden[j].style.display = "block";
    }

  });
}