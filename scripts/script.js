const editProfileButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const editClosePopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__button-close');
let userName = document.querySelector('.profile__title');
let jobName = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

function openPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
}

function closePopup() {
  editClosePopup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup();
}

editProfileButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
