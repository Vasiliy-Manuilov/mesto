//переменные для попап профиля
const editPopup = document.querySelector('#popup-profile'); //находим модальное окно для открытия
const editClosePopup = document.querySelector('#popup-profile'); //находим модальное окно для закрытия
const openPopupButton = document.querySelector('.profile__edit-button'); //находим кнопку редактировать профиль
const closePopupButton = document.querySelector('#btn-close-editProfile'); //находим кнопку закрыть попап профиля
let userName = document.querySelector('.profile__title'); //находим имя в профиле
let jobName = document.querySelector('.profile__text'); //находим занятость в профиле
let formElement = document.querySelector('.popup__form'); // Находим форму
let nameInput = document.querySelector('.popup__input_type_name'); // Находим поле имя в форме
let jobInput = document.querySelector('.popup__input_type_job'); // Находим поле занятость в форме
//переменные для попап добавить изображение
const openAddImagePopupButton = document.querySelector('.profile__add-button'); //находим кнопку добавить изображение
const addImagePopup = document.querySelector('#popup-image');//доступ к добавлению видимости окна добавить изображение
const сloseaddImagePopup = document.querySelector('#popup-image'); //доступ к удалению класса видимости попап добавить изображение
const closePopupButtonImage = document.querySelector('#btn-close-addImage'); //кнопка закрыть попап добавить изображение
let formImage = document.querySelector('.popup__form-image'); // Находим форму image
//let imageInput = document.querySelector('.popup__input_type_heading'); // Находим поле название изображения в форме
//let urlInput = document.querySelector('.popup__input_type_url'); // Находим поле ссылка на картинку в форме
// Ниже переменные и массив для работы с карточками
const elements = document.querySelector('.elements'); //получаем доступ для добавления пункта в список

const initialCards = [
  {
    name: 'Архыз',
    alt: 'Тающий снег на вершине Архыза',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    alt: 'Изгиб русла реки',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: 'Человейники',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: 'равнина перед сопкой',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: 'Железная дорога через лес',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: 'Заледенелое побережье Байкала',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Ниже Функции для попап профиля

//добавляем класс для видимости попап профиля
function openPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = userName.textContent; //Получаем значение заголовка из профиля
  jobInput.value = jobName.textContent; //Получаем значения в занятость профиля
}

//удаляем класс для скрытия модального окна
function closePopup() {
  editClosePopup.classList.remove('popup_opened');
}

//ниже функции для попап добавления изображений

//добавляем класс для видимости попап добавить изображение
function openAddImagePopup() {
  addImagePopup.classList.add('popup_opened');
}

//удаляем класс для скрытия попап добавить изображение
function closeAddImagePopup() {
  сloseaddImagePopup.classList.remove('popup_opened');
}

//отправляем форму попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; //Получаем значение поля имени и вставляем измененные значения в заголовок профиля
  jobName.textContent = jobInput.value; //Получаем значение поля имени и вставляем измененные значения в занятость профиля
  closePopup();
}

//добавляем пункт карточки в список
function createItem(item) {
  const newItem = document.querySelector('#elements__item-Template').content.cloneNode(true); //получаем содержимое шаблона и клонируем
  const itemImage = newItem.querySelector('.elements__image'); //получаем доступ к изображению в шаблоне
  itemImage.setAttribute('src', item.link); //дабавить атрибут ссылка на изображение из массива
  itemImage.setAttribute('alt', item.alt); //добавить алт для изображения из массива
  const itemTitle = newItem.querySelector('.elements__title'); //получаем доступ к загловку в шаблоне
  itemTitle.textContent = item.name; //копировать заголовок из массива
  const buttonLike = newItem.querySelector('.elements__button-like'); //доступ к кнопке лайк
  // оброботчик события кнопки лайк
  buttonLike.addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__button-like_active');
  });
  const buttonDelete = newItem.querySelector('.elements__btn-delete'); //доступ к кнопке удалить пункт списка
  buttonDelete.addEventListener('click', buttonDeleteItem); //обработчки удаления пукта в списке
  elements.append(newItem); //вставить код в html список
}

initialCards.forEach(createItem); //перебираем массив, выполняем код для шаблона и добавляем в список

// удаление пункта в списке
function buttonDeleteItem(evt) {
  const knopkaDelete = evt.target;
  const item = knopkaDelete.closest('.elements__item');
  item.remove();
}

//отправляем форму добавить изображение
function imageFormSubmit(evt) {
  evt.preventDefault();
  const formImage = evt.target;
  const heading = formImage.querySelector('.popup__input_type_heading').value;
  const image = formImage.querySelector('.popup__input_type_url').value;
  const newAddItem = {
    name: heading,
    link: image
  }
  createItem(newAddItem);
  closeAddImagePopup();
}

openPopupButton.addEventListener('click', openPopup); //открываем попап профиля
closePopupButton.addEventListener('click', closePopup); //закрываем попап профиля
openAddImagePopupButton.addEventListener('click', openAddImagePopup); //открываем попап добавить изображение
closePopupButtonImage.addEventListener('click', closeAddImagePopup); //закрываем попап добавить изображение
formElement.addEventListener('submit', handleFormSubmit); // Обработчик «отправки» формы
formImage.addEventListener('submit', imageFormSubmit); // Обработчик «отправки» формы add-image

