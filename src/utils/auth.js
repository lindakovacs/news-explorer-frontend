class Auth {
  constructor(options) {
    this.options = options;
  }

  register(email, password, name) {
    return (
      fetch(`${this.options.baseUrl}/signup`, {
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

  authorize(userid, password) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        Acccept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userid, password: password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.message) {
          localStorage.setItem('token', data.token);
          return data;
          // } else {
          //   return;
        }
      });
  }

  getContent(token) {
    return fetch(`${this.options.baseUrl}/users/me`, {
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
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }
}
const auth = new Auth({
  baseUrl: 'http://localhost:3001', //localhost
  //baseUrl: "https://api.lkovacs.students.nomoreparties.site", //api backend
  // baseUrl: 'https://register.nomoreparties.co',
});

export default auth;
