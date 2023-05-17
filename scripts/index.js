let formElement = document.querySelector('.popup__form');

let buttonPopupOpen = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__button-close');

let nameInput = document.querySelector('.popup__input_name_value');
let jobInput = document.querySelector('.popup__input_info_value');

let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info')

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

buttonPopupOpen.addEventListener('click', openPopup);
buttonPopupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);