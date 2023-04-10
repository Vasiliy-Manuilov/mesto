export default class Card {
  constructor(data, templateSelector, enlargeCard) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
    this._enlargeCard = enlargeCard;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._imageCard = this._cardElement.querySelector('.card__image');
    this._cardLike = this._cardElement.querySelector('.card__button-like');
    this._cardBasket = this._cardElement.querySelector('.card__btn-delete');
    this._setEventListeners();
    this._imageCard.src = this._link;
    this._imageCard.alt = this._alt;
    this._cardElement.querySelector('.card__title').textContent = this._name;

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._putLike();
    });
    this._cardBasket.addEventListener('click', () => {
      this._deleteCard();
    });
    this._imageCard.addEventListener('click', () => {
      this._enlargeCard(this._link, this._alt, this._name);
    });
  }

  _putLike() {
    this._cardLike.classList.toggle('card__button-like_active');
  }

  _deleteCard() {
    this._cardElement.remove();
    this. _cardElement = null;
  }
}
