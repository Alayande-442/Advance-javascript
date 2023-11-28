'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

// const openBtn = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');

// }
for (let i = 0; i < showModalBtn.length; i++) {
  // showModalBtn[i].addEventListener("click", openBtn);
  showModalBtn[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Working with class COMMENT

// closeModalBtn.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// COMMENT creating more readable code

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// when the close btn and overlay btn is clicked, the modal disappeared
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ********** COMMENT key press Event **********
document.addEventListener('keydown', function (e) {
  //   console.log('key was pressed');
  //   console.log(e.key);

  //   if (e.key === 'Escape') {
  //     console.log('ESC was pressed');
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// const arrow = () => {

// }
