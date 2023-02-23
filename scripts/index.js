const editPopup = document.querySelector('.popup'); //находим модальное окно для открытия
const editClosePopup = document.querySelector('.popup'); //находим модальное окно для закрытия
const openPopupButton = document.querySelector('.profile__edit-button'); //находим кнопку редактировать профиль
const closePopupButton = document.querySelector('.popup__button-close'); //находим кнопку закрыть профиль
let userName = document.querySelector('.profile__title'); //находим имя в профиле
let jobName = document.querySelector('.profile__text'); //находим занятость в профиле
let formElement = document.querySelector('.popup__form'); // Находим форму
let nameInput = document.querySelector('.popup__input_type_name'); // Находим поле имя в форме
let jobInput = document.querySelector('.popup__input_type_job'); // Находим поле занятость в форме
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

//добавляем класс для видимости модального окна
function openPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = userName.textContent; //Получаем значение заголовка из профиля
  jobInput.value = jobName.textContent; //Получаем значения в занятость профиля
}

//удаляем класс для скрытия модального окна
function closePopup() {
  editClosePopup.classList.remove('popup_opened');
}

//отправляем форму
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; //Получаем значение поля имени и вставляем измененные значения в заголовок профиля
  jobName.textContent = jobInput.value; //Получаем значение поля имени и вставляем измененные значения в занятость профиля
  closePopup();
}

//добавляем пункт в список
function createItem (item) {
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
  elements.append(newItem); //вставить код в html список
}

initialCards.forEach(createItem); //перебираем массив, выполняем код для шаблона и добавляем в список

openPopupButton.addEventListener('click', openPopup); //открываем попап
closePopupButton.addEventListener('click', closePopup); //закрываем попап
formElement.addEventListener('submit', handleFormSubmit); // Обработчик «отправки» формы


