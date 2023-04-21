export default class FormValidator {
  constructor(validationConfig, form) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._errorClassTemplate = validationConfig.errorClassTemplate;
    this._form = form;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError(input) {
    const errorTextElement = this._form.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );
    errorTextElement.textContent = input.validationMessage;
    errorTextElement.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorTextElement = this._form.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );
    errorTextElement.classList.remove(this._errorClass);
    errorTextElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _anableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputlist.every((input) => input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._anableButton();
    } else {
      this.disableButton();
    }
  }

  resetFormErrors() {
    this._inputlist.forEach((input) => {
      this._hideInputError(input);
    });
  }

  _setEventListeners() {
    this._inputlist = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputlist.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
}
