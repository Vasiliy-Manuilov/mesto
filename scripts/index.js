const editPopup = document.querySelector(".popup"); //находим модальное окно для открытия
const editClosePopup = document.querySelector(".popup"); //находим модальное окно для закрытия
const openPopupButton = document.querySelector(".profile__edit-button"); //находим кнопку редактировать профиль
const closePopupButton = document.querySelector(".popup__button-close"); //находим кнопку закрыть профиль
let userName = document.querySelector(".profile__title"); //находим имя в профиле
let jobName = document.querySelector(".profile__text"); //находим занятость в профиле
let formElement = document.querySelector(".popup__form"); // Находим форму
let nameInput = document.querySelector(".popup__input_type_name"); // Находим поле имя в форме
let jobInput = document.querySelector(".popup__input_type_job"); // Находим поле занятость в форме

//добавляем класс для видимости модального окна
function openPopup() {
  editPopup.classList.add("popup_opened");
  nameInput.value = userName.textContent; //Получаем значение заголовка из профиля
  jobInput.value = jobName.textContent; //Получаем значения в занятость профиля
}

//удаляем класс для скрытия модального окна
function closePopup() {
  editClosePopup.classList.remove("popup_opened");
}

//отправляем форму
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; //Получаем значение поля имени и вставляем измененные значения в заголовок профиля
  jobName.textContent = jobInput.value; //Получаем значение поля имени и вставляем измененные значения в занятость профиля
  closePopup();
}

openPopupButton.addEventListener("click", openPopup); //открываем попап
closePopupButton.addEventListener("click", closePopup); //закрываем попап
formElement.addEventListener("submit", handleFormSubmit); // Обработчик «отправки» формы
