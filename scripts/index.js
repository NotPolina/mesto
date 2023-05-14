const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__button-close');


buttonPopupOpen.addEventListener('click', () => {
  popup.classList.add('popup_opened');
});

buttonPopupClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

 popup.addEventListener('click', (evt) => {
  if (evt.target == evt.currentTarget) {
    popup.classList.remove('popup_opened');
  }
});

