//переменные для попап профиля
const editPopup = document.querySelector(".popup_profile"); //находим модальное окно для открытия
const editClosePopup = document.querySelector(".popup_profile"); //находим модальное окно для закрытия
const openPopupButton = document.querySelector(".profile__edit-button"); //находим кнопку редактировать профиль
const closePopupButton = document.querySelector(".popup__button-close"); //находим кнопку закрыть попап профиля
let userName = document.querySelector(".profile__title"); //находим имя в профиле
let jobName = document.querySelector(".profile__text"); //находим занятость в профиле
let formElement = document.querySelector(".popup__form"); // Находим форму
let nameInput = document.querySelector(".popup__input_type_name"); // Находим поле имя в форме
let jobInput = document.querySelector(".popup__input_type_job"); // Находим поле занятость в форме
//переменные для попап добавить изображение
const openAddImagePopupButton = document.querySelector(".profile__add-button"); //находим кнопку добавить изображение
const addImagePopup = document.querySelector(".popup_image"); //доступ к добавлению видимости окна добавить изображение
const сloseaddImagePopup = document.querySelector(".popup_image"); //доступ к удалению класса видимости попап добавить изображение
const closePopupButtonImage = document.querySelector(
  ".popup__button-close_theme_addImage"
); //кнопка закрыть попап добавить изображение
let formImage = document.querySelector(".popup__form-image"); // Находим форму image
let headingInput = document.querySelector(".popup__input_type_heading"); // Находим поле название изображения в форме
let imageInput = document.querySelector(".popup__input_type_url"); // Находим поле ссылка на картинку в форме
let elements = document.querySelector(".elements"); //получаем доступ для добавления пункта в список

const initialCards = [
  {
    name: "Архыз",
    alt: "Тающий снег на вершине Архыза",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    alt: "Изгиб русла реки",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    alt: "Человейники",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    alt: "равнина перед сопкой",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    alt: "Железная дорога через лес",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    alt: "Заледенелое побережье Байкала",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// открыть попап
function openPopup(addElement) {
  addElement.classList.add("popup_opened");
  nameInput.value = userName.textContent; //Получаем значение заголовка из профиля
  jobInput.value = jobName.textContent; //Получаем значения в занятость профиля
}

// скрыть popup
function closePopup(delElement) {
  delElement.classList.remove("popup_opened");
}

//отправляем форму попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; //Получаем значение поля имени и вставляем измененные значения в заголовок профиля
  jobName.textContent = jobInput.value; //Получаем значение поля имени и вставляем измененные значения в занятость профиля
  closePopup(editClosePopup);
}

//добавить изображение в список по шаблону
function createCard(card) {
  const newCard = document.querySelector("#elements__item-Template").content.cloneNode(true); //получаем содержимое шаблона и клонируем

  newCard.querySelector(".elements__image").src = card.link; //ссылка на изображение
  newCard.querySelector(".elements__image").alt = card.alt;//алт для изображения
  newCard.querySelector(".elements__title").textContent = card.name; //заголовок в шаблоне

  newCard.querySelector(".elements__btn-delete").addEventListener('click', buttonDeleteCard); //удаления изображения в списке
  newCard.querySelector(".elements__button-like").addEventListener('click', buttonLike); //кнопка лайк

  return newCard;
}

//перебираем массив, выполняем код для шаблона и добавляем в список
initialCards.forEach((card) => {
  elements.append(createCard(card));
});

//отправить форму добавить изображение
function imageFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: headingInput.value,
    link: imageInput.value,
  });
  elements.prepend(newCard);
  headingInput.value = "";
  imageInput.value = "";
  closePopup(сloseaddImagePopup);
}

// удалить изображения в списке
function buttonDeleteCard(evt) {
  evt.target.closest(".elements__item").remove();
}

 // оброботчик события кнопки лайк
function buttonLike(evt) {
  evt.target.classList.toggle("elements__button-like_active");
};

openPopupButton.addEventListener("click", () => openPopup(editPopup)); //открываем попап профиля
closePopupButton.addEventListener("click", () => closePopup(editClosePopup)); //закрываем попап профиля
openAddImagePopupButton.addEventListener("click", () =>
  openPopup(addImagePopup)
); //открываем попап добавить изображение
closePopupButtonImage.addEventListener("click", () =>
  closePopup(сloseaddImagePopup)
); //закрываем попап добавить изображение
formElement.addEventListener("submit", handleFormSubmit); // Обработчик «отправки» формы
formImage.addEventListener("submit", imageFormSubmit); // Обработчик «отправки» формы add-image
