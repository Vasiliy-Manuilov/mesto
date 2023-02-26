//переменные для попап профиля
const profilePopup = document.querySelector(".popup_profile"); //видимость попап
const btnOpenProfilePopup = document.querySelector(".profile__edit-button"); //кнопка редактировать профиль
const btnCloseProfilePopup = document.querySelector(".popup__button-close"); //кнопка закрыть попап профиля
let userName = document.querySelector(".profile__title"); //имя в профиле
let jobName = document.querySelector(".profile__text"); //занятость в профиле
let formElement = document.querySelector(".popup__form"); //форма профиля
let nameInput = document.querySelector(".popup__input_type_name"); //поле имя в форме попап
let jobInput = document.querySelector(".popup__input_type_job"); //поле занятость в форме попап

//переменные для попап добавить изображение
const addImagePopup = document.querySelector(".popup_image"); //доступ к добавлению видимости окна добавить изображение
const btnOpenAddImagePopup = document.querySelector(".profile__add-button"); //кнопка добавить изображение
const btncloseAddImagePopup = document.querySelector(".popup__button-close_addImage_close"); //кнопка закрыть попап добавить изображение
let formImage = document.querySelector(".popup__form-image"); // Находим форму image
let headingInput = document.querySelector(".popup__input_type_heading"); // поле название изображения в форме
let imageInput = document.querySelector(".popup__input_type_url"); // поле ссылка на картинку в форме
let elements = document.querySelector(".elements"); //получаем доступ для добавления карточки в список

//переменные для попап увеличить картинку
const viewerPopup = document.querySelector(".popup_viewer"); //открытие попап увеличение карточки
const btnCloseviewerPopup = document.querySelector(".popup__button-close_viewer_close"); //кнопка закрыть попап карточки

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
  closePopup(profilePopup);
}

//добавить изображение в список по шаблону
function createCard(card) {
  const newCard = document.querySelector("#elements__item-Template").content.cloneNode(true); //получаем содержимое шаблона и клонируем

  newCard.querySelector(".elements__image").src = card.link; //ссылка на изображение
  newCard.querySelector(".elements__image").alt = card.alt;//алт для изображения
  newCard.querySelector(".elements__title").textContent = card.name; //заголовок в шаблоне

  newCard.querySelector(".elements__btn-delete").addEventListener('click', (evt) => {evt.target.closest(".elements__item").remove()}); //удаление изображения
  newCard.querySelector(".elements__button-like").addEventListener('click', (evt) => {evt.target.classList.toggle("elements__button-like_active")}); //кнопка лайк
  newCard.querySelector(".elements__image").addEventListener('click', openViewerCardPopup); //при нажатии вызывает функцию просмотра

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
  closePopup(addImagePopup);
}

//вызов изображения из шаблона при клике
function openViewerCardPopup(evt) {
  viewerPopup.querySelector(".popup__image").src = evt.target.src;
  viewerPopup.querySelector(".popup__heading-image").textContent = evt.target.cardTitle; //вот здесь запара

  openPopup(viewerPopup);
}

btnOpenProfilePopup.addEventListener("click", () => openPopup(profilePopup)); //открываем попап профиля
btnCloseProfilePopup.addEventListener("click", () => closePopup(profilePopup)); //закрываем попап профиля
btnOpenAddImagePopup.addEventListener("click", () => openPopup(addImagePopup)); //открываем попап добавить изображение
btncloseAddImagePopup.addEventListener("click", () => closePopup(addImagePopup)); //закрываем попап добавить изображение
btnCloseviewerPopup.addEventListener("click", () => closePopup(viewerPopup));// закрываем попап карточки

formElement.addEventListener("submit", handleFormSubmit); // Обработчик «отправки» формы
formImage.addEventListener("submit", imageFormSubmit); // Обработчик «отправки» формы add-image
