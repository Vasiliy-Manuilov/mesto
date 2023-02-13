const editProfileButton = document.querySelector(".profile__edit-button");
let userName = document.querySelector(".profile__title");
let jobName = document.querySelector(".profile__text");
let formElement = document.querySelector(".popup__edit-profile");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");

editProfileButton.addEventListener("click", openProfilePopup);

function openProfilePopup() {
  const editPopup = document.querySelector(".popup");
  editPopup.classList.add("popup_opened");
  nameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
}

const closePopupButton = document.querySelector(".popup__button-close");

closePopupButton.addEventListener("click", closeProfilePopup);
function closeProfilePopup() {
  const editClosePopup = document.querySelector(".popup");
  editClosePopup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closeProfilePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
