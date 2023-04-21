import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  validationConfig,
  buttonEditProfile,
  profileTitle,
  profileOccupation,
  popupProfile,
  formProfile,
  nameUserProfile,
  occupationUserProfile,
  popupAddImage,
  buttonAddCard,
  formCard,
  cardAddHtml,
  popupCardViewer,
} from '../utils/constants.js';

const popupEditFormValidator = new FormValidator(validationConfig, formProfile);
popupEditFormValidator.enableValidation();

const popupAddFormValidator = new FormValidator(validationConfig, formCard);
popupAddFormValidator.enableValidation();

/** редактировать попап профиля*/
const userInfoProfile = new UserInfo(profileTitle, profileOccupation);

const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (inputData) => {
    userInfoProfile.setUserInfo(inputData.name, inputData.occupation);
    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  const inputData = userInfoProfile.getUserInfo();
  nameUserProfile.value = inputData.name;
  occupationUserProfile.value = inputData.occupation;
  popupEditFormValidator.resetFormErrors();
  popupEditProfile.open();
});

function createCard(data) {
  const card = new Card(data, '#cardTemplate', handleCardClick);
  return card.generateCard();
}

/** Инициализация карточек */
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardAddHtml
);

/** добавить карточку */
const popupAddCard = new PopupWithForm(popupAddImage, {
  handleSubmitForm: (data) => {
    cardList.addItem(createCard({ name: data['name-image'], link: data.link }));

    popupAddCard.close();
  },
});
popupAddCard.setEventListeners();

buttonAddCard.addEventListener('click', () => {
  popupAddFormValidator.resetFormErrors();
  popupAddFormValidator.disableButton();
  popupAddCard.open();
});

cardList.renderItems();

/** Увеличить карточку при клике */
const popupEnlargeImage = new PopupWithImage(popupCardViewer);
popupEnlargeImage.setEventListeners();

/** Увеличить карточку, добавить слушатели событий*/
function handleCardClick(name, link, alt) {
  popupEnlargeImage.open(name, link, alt);
}
