const showInputError = (
  input,
  errorTextElement,
  validationMessage,
  errorClass,
  inputErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

const hideInputError = (input, errorTextElement, errorClass, inputErrorClass) => {
  errorTextElement.classList.remove(errorClass);
  errorTextElement.textContent = '';
  input.classList.remove(inputErrorClass);
};

const checkInputValidity = (
  input,
  errorClassTemplate,
  errorClass,
  inputErrorClass
) => {
  const errorTextElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );
  if (!input.validity.valid) {
    showInputError(
      input,
      errorTextElement,
      input.validationMessage,
      errorClass,
      inputErrorClass
    );
  } else {
    hideInputError(input, errorTextElement, errorClass, inputErrorClass);
  }
};

const setEventListeners = (
  formList,
  config,
  errorClassTemplate,
  errorClass,
  inputErrorClass
) => {
  formList.forEach((formElement) => {
    const inputlist = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    inputlist.forEach((input) => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(
          input,
          errorClassTemplate,
          errorClass,
          inputErrorClass
        );
      });
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  setEventListeners(
    formList,
    config,
    config.errorClassTemplate,
    config.errorClass,
    config.inputErrorClass
  );
};

enableValidation({
  formSelector: '.popup__form', //форма
  inputSelector: '.popup__input', //инпут
  submitButtonSelector: '.popup__button-save', //кнопка сохранить
  inactiveButtonClass: 'popup__button-save_disabled', //не активаная кнопка сохранить
  inputErrorClass: 'popup__input_type_error', //красная линия у инпута
  errorClass: 'popup__input-error_visible', //показ текстовой ошибки
  errorClassTemplate: '.popup__input-error_type_'
});
