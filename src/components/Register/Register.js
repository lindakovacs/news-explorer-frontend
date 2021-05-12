import React from 'react';
// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({
  handleRegisterSubmit,
//   history,
  email,
  setEmail,
  password,
  setPassword,
}) {
//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       history.push('/main');
//     }
//   }, [history]);

  return (
    <PopupWithForm
      //   isOpen={props.isSignUpOpen}
      buttonText='Sign up'
      //   onClose={props.onClose}
      title='Sign up'
      link='Sign in'
      //   linkClick={props.linkClick}
      //   handleSubmit={signUpSubmit}
      //   valid={formValid}
    >
      <div className='auth__container'>
        {/* <h2 className='auth__title'>Sign up</h2> */}
        <form
          action='#'
          className='auth'
          title='Sign up'
          onSubmit={handleRegisterSubmit}
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
          <input
            className='form__input-dark'
            placeholder='Username'
            name='Username'
            type='text'
            errorText='This username is not available'
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type='submit'
            className='form__submit-button_dark'
            onSubmit={handleRegisterSubmit}
            to='/main'
          >
            Sign up
          </button>
        </form>
        <p className='form__text'>
          or{' '}
          <Link className='auth__link' to='/signin'>
            Sign in
          </Link>
        </p>
      </div>
    </PopupWithForm>
  );
}
export default Register;
