const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#cards').content
const elements = document.querySelector('.elements')

const createCard = (link, name) => {
  const li = cardTemplate.querySelector('.element').cloneNode(true)
  li.querySelector('.element__item').src = link
  li.querySelector('.element__title').textContent = name
  
  li.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  });

  li.querySelector('.element__trash').addEventListener('click', () => {
    li.remove()
  })
  
  return li
}

initialCards.forEach(card => { 
  const newCard = createCard(card.link, card.name)
  elements.prepend(newCard)
})