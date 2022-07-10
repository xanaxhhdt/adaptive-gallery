'use strict';

const cards = document.querySelectorAll('.gallery__card');
const slider = document.querySelector('.slider');

cards.forEach(item => {
   item.addEventListener('click', (event) => {
      slider.classList.add('active');
   });
});