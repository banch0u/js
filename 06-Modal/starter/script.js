'use strict';



const btnOpenModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}



for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', function (key) {
  if (key.key == 'Escape') {
    if (!modal.classList.contains('hidden') && !overlay.classList.contains('hidden')) {
      closeModal();
      console.log("esc pressed");
    }
  }
});

