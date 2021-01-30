class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // getAppInfo() {
  //   return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  // }

  // Load Cards from the Server
  getInitialCards(token) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Load User Information from the Server
  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Update Profile Picture
  updateAvatar(imageLink, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PATCH',
      body: JSON.stringify({ avatar: imageLink }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Edit Profile
  updateProfile({ name, about }, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PATCH',
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Add New Card
  addNewCard(data, token) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Delete Card
  deleteCard(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    });
  }

  // Add and Remove Likes
  changeLikeCardStatus(cardId, isLiked, token) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: isLiked ? 'DELETE' : 'PUT',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

// Add and Remove Likes
// changeLikeCardStatus(isLiked, cardId) {
//   if (isLiked) {
//     //unlike heart button
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'DELETE',
//       headers: this._headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     //like heart button
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'PUT',
//       headers: this._headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }
// }

const api = new Api({
  baseUrl: 'http://localhost:3001', //localhost
  //baseUrl: "https://api.lkovacs.students.nomoreparties.site", //api back-end
  // baseUrl: 'https://around.nomoreparties.co/v1/group-2',
  // headers: {
  //   // Authorization: 'd38c3eff-8aa3-43a2-86b1-ec6a6fc8a616',
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // },
});

export default api;
