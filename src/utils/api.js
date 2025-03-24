export default class Api {
  constructor() {
    this._baseUrl = "http://localhost:3001";
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getItems() {
    return fetch(`${this._baseUrl}/items`).then(this._checkRes);
  };

  addItem = ({itemName, imageUrl, weatherType, newId}) => {
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: itemName,
        weather: weatherType,
        imageUrl: imageUrl,
      })
    }).then(this._checkRes);
  };
}
