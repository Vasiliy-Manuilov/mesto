import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    { handleSubmitForm, buttonText, fetchingButtonText }
  ) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._formInputs = Array.from(
      this._popup.querySelectorAll('.popup__input')
    );
    this._pureFormInputs = this._popup.querySelector('.popup__form');
    this._formSubmitButton = this._popup.querySelector('.popup__button-save');
    this._buttonText = buttonText;
    this._fetchingButtonText = fetchingButtonText;
  }

  _getInputValues() {
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  close() {
    super.close();
    this._pureFormInputs.reset();
  }

  setInputValues(data) {
    this._formInputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setLoadingMessage(isLoading) {
    if (isLoading === true) {
      this._formSubmitButton.textContent = this._fetchingButtonText;
    } else {
      this._formSubmitButton.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setLoadingMessage(true);
      this._handleSubmitForm(this._getInputValues());
    });
  }
}
