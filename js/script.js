'use strict';

const cards = Array.from(document.querySelectorAll('.gallery__card'));
const pictire = Array.from(document.querySelectorAll('.gallery__card_pic'));
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider__container');
const sliderButtonLeft = document.querySelector('.slider__btn_left');
const sliderButtonRight = document.querySelector('.slider__btn_right');
const sliderButtonClose = document.querySelector('.slider__close');

let cardIndex = 0;
let pictureFull;

cards.forEach(item => {
   item.addEventListener('click', (event) => {
      event.preventDefault();

      cardIndex = cards.indexOf(item);

      pictureFull = pictire[cardIndex].cloneNode();
      pictureFull.style.objectFit = 'contain';
      sliderContainer.append(pictureFull);

      slider.classList.add('active');
   });
});

sliderButtonLeft.addEventListener('click', (event) => {
   event.preventDefault();
   changePicture('left');
});

sliderButtonRight.addEventListener('click', (event) => {
   event.preventDefault();
   changePicture('right');
});

function changePicture(element) {
   if (element === 'left') {
      if (cardIndex > 0) {
         cardIndex--;
      } else {
         cardIndex = cards.length - 1;
      }
   } else if (element === 'right') {
      if (cardIndex < cards.length - 1) {
         cardIndex++;
      } else {
         cardIndex = 0;
      }
   }
   let newPictureFull = pictire[cardIndex].cloneNode();
   newPictureFull.style.objectFit = 'contain';
   pictureFull.replaceWith(newPictureFull);
   pictureFull = newPictureFull;
}

sliderButtonClose.addEventListener('click', (event) => {
   event.preventDefault();

   slider.classList.remove('active');
   pictureFull.remove();
});