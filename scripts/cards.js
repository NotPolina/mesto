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

const renderCards = (cardsName) => {
  const li = document.createElement('li');
  li.classList.add('element')

  const image = document.createElement('img')
  image.classList.add('element__item')

  const title = document.createElement('h2')
  title.classList.add('element__title')

  const buttonTrash = document.createElement('button')
  buttonTrash.classList.add('element__trash')

  const buttonLike = document.createElement('button')
  buttonLike.classList.add('element__like')

  li.append(image, title, buttonTrash, buttonLike)

  return li
}

initialCards.forEach((cardsName) => {
  elements.append(renderCards(cardsName))
})