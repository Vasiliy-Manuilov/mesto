import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  avatar,
  popupDeleteCardSelector,
  buttonEditAvatar,
  formAvatar,
  popupAvatar,
  validationConfig,
  buttonEditProfile,
  profileTitle,
  profileOccupation,
  popupProfile,
  formProfile,
  popupAddImage,
  buttonAddCard,
  formCard,
  cardAddHtml,
  popupCardViewer,
} from '../utils/constants.js';

/** вызвать валидацию форм*/
const popupEditFormValidator = new FormValidator(validationConfig, formProfile);
popupEditFormValidator.enableValidation();

const popupAddFormValidator = new FormValidator(validationConfig, formCard);
popupAddFormValidator.enableValidation();

const popupAvatarFormValidator = new FormValidator(
  validationConfig,
  formAvatar
);
popupAvatarFormValidator.enableValidation();

/** редактировать профиль*/
const userInfoProfile = new UserInfo(profileTitle, profileOccupation, avatar);

const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (inputData) => {
    api
      .patchUserInfo(inputData.name, inputData.occupation)
      .then(() => {
        userInfoProfile.setUserInfo(inputData.name, inputData.occupation);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.setLoadingMessage(false);
      });
  },
  buttonText: 'Сохранить',
  fetchingButtonText: 'Сохрание...',
});
popupEditProfile.setEventListeners();

/** получить данные в попап из профиля*/
buttonEditProfile.addEventListener('click', () => {
  const inputData = userInfoProfile.getUserInfo();
  popupEditProfile.setInputValues(inputData);
  popupEditFormValidator.resetFormErrors();
  popupEditProfile.open();
});

/** обновить аватар*/
const popupUpdateAvatar = new PopupWithForm(popupAvatar, {
  handleSubmitForm: (inputData) => {
    api
      .patchAvatar(inputData.url)
      .then(() => {
        userInfoProfile.setAvatar(inputData.url);
        popupUpdateAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupUpdateAvatar.setLoadingMessage(false);
      });
  },
  buttonText: 'Сохранить',
  fetchingButtonText: 'Сохрание...',
});
popupUpdateAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  popupAvatarFormValidator.resetFormErrors();
  popupAvatarFormValidator.disableButton();
  popupUpdateAvatar.open();
});

/** создать карточку*/
function createCard(data) {
  const canDelete = userInfoProfile.getUserId() === data.owner._id;
  const card = new Card({
    data,
    templateSelector: '#cardTemplate',
    handleCardClick,
    handleBasketClick: openConfirmDeletePopup,
    canDelete,
    userId: userInfoProfile.getUserId(),
    handleLikeButtonClick: () => {
      if (card.isLiked) {
        api
          .deleteLikeCard(card.getCardId())
          .then((data) => {
            card.unsetLike();
            card.countlikes(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        api
          .putLikeCard(card.getCardId())
          .then((data) => {
            card.setLike();
            card.countlikes(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  });
  return card.generateCard();
}

/** Инициализация карточек */
const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addInitialItem(createCard(item));
    },
  },
  cardAddHtml
);

/** добавить карточку */
const popupAddCard = new PopupWithForm(popupAddImage, {
  handleSubmitForm: (data) => {
    api
      .postNewCard(data['name-image'], data.link)
      .then((res) => {
        cardList.addItem(createCard(res));
        popupAddCard.close();
      })
      .catch(console.log)
      .finally(() => {
        popupAddCard.setLoadingMessage(false);
      });
  },
  buttonText: 'Создать',
  fetchingButtonText: 'Сохрание...',
});
popupAddCard.setEventListeners();

buttonAddCard.addEventListener('click', () => {
  popupAddFormValidator.resetFormErrors();
  popupAddFormValidator.disableButton();
  popupAddCard.open();
});

/** Увеличить карточку кликом */
const popupEnlargeImage = new PopupWithImage(popupCardViewer);
popupEnlargeImage.setEventListeners();

/** Увеличить карточку, добавить слушатели событий*/
function handleCardClick(name, link) {
  popupEnlargeImage.open(name, link);
}

const popupDeleteCard = new PopupWithConfirm(popupDeleteCardSelector);
popupDeleteCard.setEventListeners();

function openConfirmDeletePopup(id, onSuccess) {
  popupDeleteCard.open(() =>
    api
      .deleteCard(id)
      .then((data) => {
        onSuccess(data);
        popupDeleteCard.close();
      })
      .catch(console.log)
  );
}

/** Работать с API*/
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'f569d5a2-82ff-41f3-8900-7cdbe10a5486',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, items]) => {
    userInfoProfile.setUserInfo(data.name, data.about);
    userInfoProfile.setAvatar(data.avatar);
    userInfoProfile.saveUserId(data._id);
    cardList.renderItems(items);
  })
  .catch((err) => {
    console.error(err);
  });
