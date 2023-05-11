const buttonPopupOpen = document.querySelector('.popup__opened');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button-close');

buttonPopupOpen.addEventListener('click', () => {
  popup.classList.add('popup__opened');
});

buttonPopupClose.addEventListener('click', () => {
  popup.classList.remove('popup__opened');
});

popup.addEventListener('click', (evt) => {
  if (evt.target == evt.currentTarget) {
    popup.classList.remove('popup__opened');
  }
});