export default class Card {
  constructor({
    data,
    templateSelector,
    handleCardClick,
    handleBasketClick,
    canDelete,
    userId,
    handleLikeButtonClick,
  }) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._currentUserId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleBasketClick = handleBasketClick;
    this._canDelete = canDelete;
    this._handleLikeButtonClick = handleLikeButtonClick;
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
    this._cardLikeCount = this._cardElement.querySelector('.card__like-count');
    this._cardBasket = this._cardElement.querySelector('.card__btn-delete');
    if (!this._canDelete) {
      this._cardBasket.remove();
      this._cardBasket = null;
    }
    this._setEventListeners();
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;
    this._cardLikeCount.textContent = this._likes.length;
    this._toggleLikeState();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeButtonClick();
    });
    this._cardBasket &&
      this._cardBasket.addEventListener('click', () => {
        this._handleBasketClick(this._id, this.deleteCard.bind(this));
      });
    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link, this._alt);
    });
  }

  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  setLike() {
    this._cardLike.classList.add('card__button-like_active');
    this.isLiked = true;
  }

  unsetLike() {
    this._cardLike.classList.remove('card__button-like_active');
    this.isLiked = false;
  }

  countlikes(data) {
    this._cardLikeCount.textContent = data.length;
  }

  _checkUserLike() {
    return this._likes.some((item) => item._id === this._currentUserId);
  }

  getCardId() {
    return this._id;
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
