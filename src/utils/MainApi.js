class Api {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }
    _checkResponse(res) {
      if (res.ok) {
        const data = res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    register(name, email, password) {
        return fetch( `${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }), 
        }).then(this._checkResponse);
    }

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }), 
        }).then(this._checkResponse);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
          },
        }).then(this._checkResponse);
      }

    editUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
          }),
        }).then(this._checkResponse);
      }
    

}

export const mainApi = new Api(
    "http://localhost:3001"
  );
  