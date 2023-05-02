export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._profileTitle = document.querySelector(nameSelector);
    this._profileOccupation = document.querySelector(aboutSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._profileTitle.textContent,
      occupation: this._profileOccupation.textContent,
    };
  }

  setUserInfo(name, occupation) {
    this._profileTitle.textContent = name;
    this._profileOccupation.textContent = occupation;
  }

  setAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }

  saveUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
