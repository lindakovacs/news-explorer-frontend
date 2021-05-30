class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // getAppInfo() {
  //   return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  // }

  register(email, password, name) {
    return (
      fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          Acccept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })
        //  .then((res) => {
        //    return res.json();
        //  });
        .then((res) => {
          if (res.status === 201) {
            return res.json();
          } else {
            throw new Error('409 - Unsuccessful registration');
          }
        })
    );
  }

  authorize(email, password) {
    return (
      fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          Acccept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          return res.json();
        })
        // .then((res) => res.json())
        .then((data) => {
          if (!data.message) {
            localStorage.setItem('token', data.token);
            return data;
            // } else {
            //   return;
          }
        })
    );
  }

  logout() {
    return fetch(`${this._baseUrl}/users/logout`, {
      headers: {
        Acccept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

  getContent(token) {
    return (
      fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          Acccept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.ok
            ? res.json()
            : Promise.reject(`${res.status} - ${res.message}`);
        })
        // .then((data) => {
        //   return data;
        // })
        .then((data) => data)
        .catch((err) => console.log(err))
    );
  }

  getArticles(token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    // .then((res) => res.json())
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    // })
    // .then((res) =>
    //   res.ok
    //     ? res.json()
    //     : Promise.reject(new Error(`${res.status} - ${res.message}`))
    // )
    // .then((data) => data);
  }

  // updateAvatar(imageLink, token) {
  //   return fetch(`${this._baseUrl}/users/me/avatar`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: 'PATCH',
  //     body: JSON.stringify({ avatar: imageLink }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   });
  // }

  // updateProfile({ name, about }, token) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: 'PATCH',
  //     body: JSON.stringify({ name, about }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   });
  // }

  addArticle(article, token) {
    return (
      fetch(`${this._baseUrl}/articles`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(article),
      })
        // .then((res) => {
        //   if (res.ok) {
        //     return res.json();
        //   }
        // });
        .then((res) => res.json())
    );
  }

  deleteArticle(articleId, token) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }

  // changeLikeArticleStatus(articleId, isLiked, token) {
  //   return fetch(`${this._baseUrl}/articles/likes/${articleId}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: isLiked ? 'DELETE' : 'PUT',
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   });
  // }
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
//       .catch(err => console.log(err));
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
//       .catch(err => console.log(err));
//      }
//    }
// }

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001', //localhost
  //baseUrl: "https://api.lkovacs.students.nomoreparties.site", //api back-end
  // baseUrl: 'https://around.nomoreparties.co/v1/group-2',
  // headers: {
  //   // Authorization: 'd38c3eff-8aa3-43a2-86b1-ec6a6fc8a616',
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // },
});

export default mainApi;
