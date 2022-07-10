'use strict';

const cards = Array.from(document.querySelectorAll('.gallery__card'));
const pictire = Array.from(document.querySelectorAll('.gallery__card_pic'));
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider__container');

let cardIndex = 0;
let pictureFull;

cards.forEach(item => {
   item.addEventListener('click', (event) => {
      cardIndex = cards.indexOf(item);

      pictureFull = pictire[cardIndex];
      pictureFull.style.objectFit = 'contain';
      sliderContainer.append(pictureFull);

      slider.classList.add('active');
   });
});