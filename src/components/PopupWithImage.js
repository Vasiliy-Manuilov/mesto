import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageName = this._popup.querySelector(
      '.popup__heading-image'
    );
  }

  open(name, link) {
    super.open();
    this._popupImageName.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
  }
}
