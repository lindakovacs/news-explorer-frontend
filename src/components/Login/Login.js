import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({
  email,
  loggedIn,
  userEmail,
  setUserEmail,
  password,
  setPassword,
  handleLoginSubmit,
  setEmail,
}) {
//   const history = useHistory();

//   useEffect(() => {
//     if (loggedIn) {
//       history.push('/main');
//       setUserEmail(email || userEmail);
//     }
//   });

  return (
    <PopupWithForm
      //   isOpen={props.isSignInOpen}
      buttonText='Sign in'
      //   onClose={props.onClose}
      title='Sign in'
      link='Sign up'
      //   linkClick={props.linkClick}
      //   handleSubmit={handleSignInSubmit}
      //   valid={formValid}
    >
      <div className='auth__container'>
        {/* <h2 className='auth__title'>Sign in</h2> */}
        <form
          action='#'
          className='auth'
          title='Sign in'
          onSubmit={handleLoginSubmit}
          to='/main'
        >
          <input
            className='form__input-dark'
            placeholder='Email'
            name='Email'
            type='email'
            errorText='Invalid email address'
            required
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form__input-dark'
            placeholder='Password'
            name='Password'
            type='password'
            errorText='Password requires additional characters'
            required
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='form__submit-button_dark'
            onClick={handleLoginSubmit}
          >
            Sign in
          </button>
        </form>
        <Link className='auth__link' to='/signup'>
          or Sign up
        </Link>
      </div>
    </PopupWithForm>
  );
}
export default Login;
