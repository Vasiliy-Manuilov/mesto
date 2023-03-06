/** Редактирование профиля */
const profilePopup = document.querySelector('.popup_type_profile');
const popupEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.popup__button-close');
const userName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__text');
const formProfile = document.querySelector('.popup__form');
const nameUserProfile = document.querySelector('.popup__input_type_name');
const jobUserProfile = document.querySelector('.popup__input_type_job');

/** Добавить карточку */
const popupAddCard = document.querySelector('.popup_type_image');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCard = document.querySelector(
  '.popup__button-close_type_image'
);
const formImage = document.querySelector('.popup__form-image');
const headingCard = document.querySelector('.popup__input_type_heading');
const urlCard = document.querySelector('.popup__input_type_url');
const cardAddHtml = document.querySelector('.elements');

/** Увеличить карточку */
const popupCardViewer = document.querySelector('.popup_type_viewer');
const buttonCloseViewer = document.querySelector(
  '.popup__button-close_type_viewer'
);
const imageViewer = document.querySelector('.popup__image');
const headingViewer = document.querySelector('.popup__heading-image');

/** Открыть попап */
function openPopup(addElement) {
  addElement.classList.add('popup_opened');
}

/** Закрыть попап*/
function closePopup(delElement) {
  delElement.classList.remove('popup_opened');
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
  headingCard.value = '';
  urlCard.value = '';
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

/** Обработчики кнопок */
popupEditProfile.addEventListener('click', () => {
  nameUserProfile.value = userName.textContent;
  jobUserProfile.value = jobName.textContent;
  openPopup(profilePopup);
});

buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup));
buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));
buttonCloseCard.addEventListener('click', () => closePopup(popupAddCard));
buttonCloseViewer.addEventListener('click', () => closePopup(popupCardViewer));

formProfile.addEventListener('submit', handleSubmitProfileForm);
formImage.addEventListener('submit', handleSubmitImageForm);
