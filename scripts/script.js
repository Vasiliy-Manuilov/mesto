const editProfileButton = document.querySelector('.profile__edit-button');

editProfileButton.addEventListener('click', openProfilePopup);

function openProfilePopup() {
  const editPopup = document.querySelector('.popup');
  editPopup.classList.add('popup_opened');
}

const closePopupButton = document.querySelector('.popup__button-close');

closePopupButton.addEventListener('click', closeProfilePopup);

function closeProfilePopup() {
  const editClosePopup = document.querySelector('.popup');
  editClosePopup.classList.remove('popup_opened');
}

// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function handleFormSubmit (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);
