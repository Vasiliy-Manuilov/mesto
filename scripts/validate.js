const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  errorClassTemplate: '.popup__input-error_type_',
};

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

const hideInputError = (
  input,
  errorTextElement,
  errorClass,
  inputErrorClass
) => {
  errorTextElement.classList.remove(errorClass);
  errorTextElement.textContent = '';
  input.classList.remove(inputErrorClass);
};

const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

const anableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
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

const hasInvalidInput = (inputlist) => {
  return Array.from(inputlist).every((input) => input.validity.valid);
};

const toggleButtonState = (submitButton, inactiveButtonClass, inputlist) => {
  if (!hasInvalidInput(inputlist)) {
    anableButton(submitButton, inactiveButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass);
  }
};

const setEventListeners = (
  formList,
  config,
  errorClassTemplate,
  errorClass,
  inputErrorClass,
  inactiveButtonClass
) => {
  formList.forEach((formElement) => {
    const inputlist = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(submitButton, inactiveButtonClass, inputlist);
    inputlist.forEach((input) => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(
          input,
          errorClassTemplate,
          errorClass,
          inputErrorClass
        );
        toggleButtonState(submitButton, inactiveButtonClass, inputlist);
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
    config.inputErrorClass,
    config.inactiveButtonClass
  );
};

enableValidation(validationConfig);
