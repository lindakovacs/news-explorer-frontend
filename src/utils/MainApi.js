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
          if (data.token) {
            localStorage.setItem('token', data.token);
            return data;
            // } else {
            //   return;
          }
        })
    );
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      headers: {
        Acccept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    // .then((res) => {
    //   return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    // });
  }

  getUserInfo(token) {
    return (
      fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          Acccept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
        // .then((res) => {
        //   return res.ok
        //     ? res.json()
        //     : Promise.reject(`${res.status} - ${res.message}`);
        // })
        // .then((data) => {
        //   return data;
        // })
        // .catch((err) => console.log(err));
        // .then((res) => {
        //     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
        // });
              .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
    );
  }

  getArticles(token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    // .then((res) => res.json())
  }

  addArticle(article, token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(article),
    })
    // .then((res) => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    // });
    .then((res) => res.json())
    // .then((res) => {
    //     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    //   });
  }

  deleteArticle(articleId, token) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001', //localhost
  //baseUrl: "https://api.lkovacs.students.nomoreparties.site", //api back-end
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

export default mainApi;
