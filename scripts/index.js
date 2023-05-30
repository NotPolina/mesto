let formElementProfile = document.querySelector('.popup__form');
let formElementCards = document.querySelector('.popup__form-element');

let buttonProfilePopupOpen = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__button-close');

let buttonCardsPopupOpen = document.querySelector('.profile__add-button');
let buttonCardsPopupClose = document.querySelector('.popup__button-close-cards');
let popupCards = document.querySelector('.popup__cards')

let nameInput = document.querySelector('.popup__input_name_value');
let jobInput = document.querySelector('.popup__input_info_value');
let placeInput = document.querySelector('.popup__input_place_value');
let linkInput = document.querySelector('.popup__input_link_value');

let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info');
let cardsPlace = document.querySelector('.element__title');
let cardsLink = document.querySelector('.element__item');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let infoValue = jobInput.value;

    profileName.textContent = nameValue;
    profileInfo.textContent = infoValue;

   closePopup();
}

function handleAddCards (evt) {
  evt.preventDefault(); 

    let placeValue = placeInput.value;
    let linkValue = linkInput.value;

    cardsPlace.textContent = placeValue;
    cardsLink.textContent = linkValue;

   closePopup();
}

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
  popup.classList.add('popup_opened')
}

function openPopupCards() {
  placeInput.value = cardsPlace.textContent;
  linkInput.value = cardsLink.textContent;
  popupCards.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function closePopupCards() {
  popupCards.classList.remove('popup_opened')
}

buttonProfilePopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);
formElementProfile.addEventListener('submit', handleFormSubmit);

buttonCardsPopupOpen.addEventListener('click', openPopupCards);
buttonCardsPopupClose.addEventListener('click', closePopupCards);
formElementCards.addEventListener('submit', handleAddCards);

const initialCards = [
  {
    name: 'США',
    link: 'http://127.0.0.1:5500/mesto/images/USA.jpg'
  },
  {
    name: 'Черепаха',
    link: 'http://127.0.0.1:5500/mesto/images/turtle.jpg'
  },
  {
    name: 'Монтерей',
    link: 'http://127.0.0.1:5500/mesto/images/monterey.jpg'
  },
  {
    name: 'Катердальная пещера',
    link: 'http://127.0.0.1:5500/mesto/images/cathedral-cove.jpg'
  },
  {
    name: 'Остров Ириомит',
    link: 'http://127.0.0.1:5500/mesto/images/iriomote-island.jpg'
  },
  {
    name: 'Кабо Сан Лукас',
    link: 'http://127.0.0.1:5500/mesto/images/cabo-san-lucas.jpg'
  }
];

let like = document.querySelector('.element__like');
like.addEventListener('click', () =>
like.classList.add('element__like_active'));