const popups = Array.from(document.querySelectorAll('.popup'));

/** Редактирование профиля */
const popupEditProfile = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__text');
const profilePopup = document.querySelector('.popup_type_profile');
const submitProfile = profilePopup.querySelector('.popup__form');
const nameUserProfile = profilePopup.querySelector('[name="name"]');
const jobUserProfile = profilePopup.querySelector('[name="job"]');

/** Добавить карточку */
const popupAddCard = document.querySelector('.popup_type_image');
const buttonAddCard = document.querySelector('.profile__add-button');
const submitCard = popupAddCard.querySelector('.popup__form');
const headingCard = popupAddCard.querySelector('[name="name-image"]');
const urlCard = popupAddCard.querySelector('[name="url"]');
const cardAddHtml = document.querySelector('.elements');

/** Увеличить карточку */
const popupCardViewer = document.querySelector('.popup_type_viewer');
const imageViewer = popupCardViewer.querySelector('.popup__image');
const headingViewer = popupCardViewer.querySelector('.popup__heading-image');

/** Открыть попап */
function openPopup(elementPopup) {
  elementPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

/** Закрыть кнопкой Esc*/
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupEscape = document.querySelector('.popup_opened');
    closePopup(popupEscape);
  }
}

/** Закрыть попап*/
function closePopup(elementPopup) {
  elementPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

/** Отправить форму попап профиля*/
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = nameUserProfile.value;
  jobName.textContent = jobUserProfile.value;
  closePopup(profilePopup);
}

/** создать объект по шаблону*/
function createCard(card) {
  const newCard = document
    .querySelector('#cardTemplate')
    .content.cloneNode(true);
  const imageCard = newCard.querySelector('.card__image');
  imageCard.src = card.link;
  imageCard.alt = card.alt;
  newCard.querySelector('.card__title').textContent = card.name;
  newCard
    .querySelector('.card__btn-delete')
    .addEventListener('click', deleteCard);
  newCard
    .querySelector('.card__button-like')
    .addEventListener('click', putLike);
  imageCard.addEventListener('click', () => enlargeCard(card));

  return newCard;
}

/** перебираем массив, берём значения для шаблона и добавляем в html*/
initialCards.forEach((card) => {
  cardAddHtml.append(createCard(card));
});

/** Форма Добавить карточку */
function handleSubmitImageForm(evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: headingCard.value,
    link: urlCard.value,
  });
  cardAddHtml.prepend(newCard);
  // headingCard.value = '';
  // urlCard.value = '';
  evt.target.reset();
  closePopup(popupAddCard);
}

/** Увеличить карточку */
function enlargeCard(card) {
  imageViewer.src = card.link;
  imageViewer.alt = card.alt;
  headingViewer.textContent = card.name;
  openPopup(popupCardViewer);
}

/** Лайкнуть */
function putLike(evt) {
  evt.target.classList.toggle('card__button-like_active');
}

/** Удалить карточку */
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

/** Закрыть по кнопке и кликом по оверлей*/
popups.forEach((element) => {
  element.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(element);
    }
  });
});

/** Обработчики кнопок */
popupEditProfile.addEventListener('click', () => {
  nameUserProfile.value = userName.textContent;
  jobUserProfile.value = jobName.textContent;
  openPopup(profilePopup);
});

buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));

submitProfile.addEventListener('submit', handleSubmitProfileForm);
submitCard.addEventListener('submit', handleSubmitImageForm);
