//Попап редактирования профиля
let formElementProfile = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');

let buttonProfilePopupOpen = document.querySelector('.profile__edit-button');
let buttonPopupClose = document.querySelector('.popup__button-close');

let nameInput = document.querySelector('.popup__input_name_value');
let jobInput = document.querySelector('.popup__input_info_value');

let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let infoValue = jobInput.value;
    
    profileName.textContent = nameValue;
    profileInfo.textContent = infoValue;

   closePopup();
}

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

buttonProfilePopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);
formElementProfile.addEventListener('submit', handleFormSubmit);

//Попап добавления карточки
let formElementCards = document.querySelector('.popup__form-element');

let buttonCardsPopupOpen = document.querySelector('.profile__add-button');
let buttonCardsPopupClose = document.querySelector('.popup__button-close-cards');
let popupCards = document.querySelector('.popup__cards');

let placeInput = document.querySelector('.popup__input_place_value');
let linkInput = document.querySelector('.popup__input_link_value');

let cardsPlace = document.querySelector('.element__title');
let cardsLink = document.querySelector('.element__item');

function handleAddCards (evt) {
  evt.preventDefault(); 
    let placeValue = placeInput.value;
    let linkValue = linkInput.value;

    cardsPlace.textContent = placeValue;
    cardsLink.src = linkValue;

    renderCard(placeValue, linkValue);
}

function openPopupCards() {
  popupCards.classList.add('popup_opened')
}

function closePopupCards() {
  popupCards.classList.remove('popup_opened')
}

buttonCardsPopupOpen.addEventListener('click', openPopupCards);
buttonCardsPopupClose.addEventListener('click', closePopupCards);
formElementCards.addEventListener('submit', handleAddCards);

const renderCard = (placeValue, linkValue) => {
  const newCard = createCard(placeValue, linkValue);
  elements.append(newCard);
}

//Попап просмотра фотографии
let popupImage = document.querySelector('.popup__image');
let buttonImagePopupClose = document.querySelector('.popup__button-close-image');

let bigImage = document.querySelector('.popup__big-image');
let textImage = document.querySelector('.popup__title-big-image');

function openPopupImage() {
  popupImage.classList.add('popup_opened')
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened')
}

buttonImagePopupClose.addEventListener('click', closePopupImage);

let image = document.querySelector('.elemnt__item');

function openedImage () {
  textImage.textContent = cardsPlace.textContent;
  bigImage.src = cardsLink;
}

image.addEventListener('click', () => {
  openPopupImage(popupImage);
});