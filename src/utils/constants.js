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
export const popupDeleteCardSelector = ".popup_type_confirm";

/** Редактирование профиля */
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonEditAvatar = document.querySelector('.profile__avatar-edit');
export const profileTitle = '.profile__title';
export const profileOccupation = '.profile__text';
export const avatar = '.profile__image';
export const popupProfile = '.popup_type_profile';
export const popupAvatar = '.popup_type_avatar';
export const formProfile = document.forms.profile;
export const formAvatar = document.forms.avatar;

// /** Добавить карточку */
export const popupAddImage = '.popup_type_image';
export const buttonAddCard = document.querySelector('.profile__add-button');
export const formCard = document.forms.card;
