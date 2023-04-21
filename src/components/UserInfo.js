export default class UserInfo {
  constructor(profileTitle, profileOccupation) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileOccupation = document.querySelector(profileOccupation);
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
}
