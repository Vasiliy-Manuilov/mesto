export const initialCards = [
  {
    name: 'Архыз',
    alt: 'Тающий снег на вершине Архыза',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    alt: 'Изгиб русла реки',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    alt: 'Человейники',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    alt: 'равнина перед сопкой',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    alt: 'Железная дорога через лес',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    alt: 'Заледенелое побережье Байкала',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  errorClassTemplate: '.popup__input-error_type_',
};

/** Добавить карточку */
export const cardAddHtml = '.elements';

/** Увеличить карточку */
export const popupCardViewer = '.popup_type_viewer';

/** Редактирование профиля */
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const profileTitle = '.profile__title';
export const profileOccupation = '.profile__text';
export const popupProfile = '.popup_type_profile';
export const formProfile = document.forms.profile;

// /** Добавить карточку */
export const popupAddImage = '.popup_type_image';
export const buttonAddCard = document.querySelector('.profile__add-button');
export const formCard = document.forms.card;
