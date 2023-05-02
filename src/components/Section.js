export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => this._renderer(item));
  }

  addInitialItem(element) {
    this._containerElement.append(element);
  }

  addItem(element) {
    this._containerElement.prepend(element);
  }
}
