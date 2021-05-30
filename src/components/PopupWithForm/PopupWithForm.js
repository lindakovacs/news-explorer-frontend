import React, { useState, useRef } from 'react';
// import validator from 'validator';

const PopupWithForm = ({
  isRegisterPopup,
  setIsRegisterPopup,
  isFormPopupOpen,
  setFormPopup,
  setRegisterSuccessPopup,
  setIsPopupOpen,
  setLoggedIn,
  setRegisterSuccess,
  setCurrentUser,
  registerHandler,
  signinHandler,
  getUserInfo,
}) => {
  const [errors, setErrors] = useState({});
  const [signinFailed, setSigninFailed] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [disableInputs, setInputDisable] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    registerHandler(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    )
      .then((res) => {
        if (res) {
          setRegisterSuccessPopup(true);
          setFormPopup(false);
          setRegisterSuccess(true);
        } else {
          setRegisterSuccess(false);
          setFormPopup(false);
          setRegisterSuccessPopup(true);
        }
      })
      .catch((err) => {
        setRegisterSuccess(false);
        setFormPopup(false);
        setRegisterSuccessPopup(true);
        console.log(err);
      });
  }

  function handleSigninSubmit(e) {
    e.preventDefault();
    setInputDisable(true);
    signinHandler(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res.token);
          getUserInfo()
            .then((res) => {
              setCurrentUser(res);
            })
            .then(() => {
              emailRef.current.value = '';
              passwordRef.current.value = '';
              setSigninFailed(false);
              setInputDisable(false);
              setFormPopup(false);
              setLoggedIn(true);
              closePopup();
            })
            .catch(() => {
              setSigninFailed(true);
              setInputDisable(false);
              setBadRequest(true);
            });
        } else {
          setSigninFailed(true);
          setInputDisable(false);
          setBadRequest(true);
        }
      })
      .catch((err) => {
        if (err === 'Error: 400') {
          setSigninFailed(true);
          setBadRequest(true);
          setInputDisable(false);
        } else {
          setSigninFailed(true);
          setInputDisable(false);
          console.log(err);
        }
      });
  }

  function isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function isStrongPassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    return re.test(password);
  }

  function validateInputs(email, password, username = null) {
    const errors = {};

    if (!email || !isEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is a required field';
    } else if (!isStrongPassword(password, { minSymbols: 0 })) {
      errors.password =
        'Password must be at least 8 characters and contain a number and a capital letter.';
    }

    if (username === null) {
    } else if (!username) {
      errors.username = 'Username is a required field.';
    } else if (username.length < 5) {
      errors.username = 'Username must be at least 6 characters';
    }

    return errors;
  }

  function registerFormOnChange() {
    const validatedInputs = validateInputs(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );
    if (Object.keys(validatedInputs).length === 0) {
      setErrors(false);
      return;
    }

    setErrors(validatedInputs);
    return;
  }

  function signinFormOnChange() {
    const validatedInputs = validateInputs(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (Object.keys(validatedInputs).length === 0) {
      setErrors(false);
      return;
    }

    setErrors(validatedInputs);
    return;
  }

  function closePopup() {
    setIsPopupOpen(false);
    // setFormPopup(false);
  }

  function handleRegisterPopup() {
    setBadRequest(false);
    setIsRegisterPopup(!isRegisterPopup);
  }

  // function handleSignin() {
  //   props.setLoggedIn(true);
  //   closePopup();
  // }

  function handleRegister() {
    if (isRegisterPopup) {
      return (
        <>
          <h2 className='popup__title'>Sign up</h2>
          <form
            onChange={() => registerFormOnChange()}
            onSubmit={handleRegisterSubmit}
            className='popup__form popup__form_register form'
          >
            <label className='form__label' htmlFor='register-email'>
              Email
            </label>
            <input
              className={`form__input ${
                disableInputs ? 'form__input_disabled' : ''
              }`}
              disabled={disableInputs ? true : false}
              type='email'
              id='register-email'
              ref={emailRef}
              placeholder='Email'
              required
            ></input>
            {errors.email ? (
              <span className='form__error'>{errors.email}</span>
            ) : (
              ''
            )}

            <label className='form__label' htmlFor='register-password'>
              Password
            </label>
            <input
              className={`form__input ${
                disableInputs ? 'form__input_disabled' : ''
              }`}
              disabled={disableInputs ? true : false}
              type='password'
              id='register-password'
              ref={passwordRef}
              placeholder='Password'
              required
            ></input>
            {errors.password ? (
              <span className='form__error'>{errors.password}</span>
            ) : (
              ''
            )}

            <label className='form__label' htmlFor='register-username'>
              Username
            </label>
            <input
              className={`form__input ${
                disableInputs ? 'form__input_disabled' : ''
              }`}
              disabled={disableInputs ? true : false}
              type='text'
              id='register-username'
              ref={nameRef}
              placeholder='Username'
              required
            ></input>
            {errors.username ? (
              <span className='form__error'>{errors.username}</span>
            ) : (
              ''
            )}
            <button
              type='submit'
              className={`popup__submit
              ${!errors ? 'popup__submit_active' : ''}`}
            >
              {isRegisterPopup ? 'Sign up' : 'Sign in'}
            </button>
          </form>

          <p className='popup__form-text'>
            or&nbsp;
            <button
              onClick={handleRegisterPopup}
              className='popup__form-button'
            >
              Sign in
            </button>
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2 className='popup__title'>Sign in</h2>
          <form
            onChange={signinFormOnChange}
            onSubmit={handleSigninSubmit}
            className='popup__form popup__form_signin form'
          >
            <label className='form__label' htmlFor='register-email'>
              Email
            </label>
            <input
              className={`form__input ${
                disableInputs ? 'form__input_disabled' : ''
              }`}
              disabled={disableInputs ? true : false}
              type='email'
              id='register-email'
              ref={emailRef}
              placeholder='Email'
              required
            ></input>
            {errors.email ? (
              <span className='form__error'>{errors.email}</span>
            ) : (
              ''
            )}

            <label className='form__label' htmlFor='register-password'>
              Password
            </label>
            <input
              className={`form__input ${
                disableInputs ? 'form__input_disabled' : ''
              }`}
              disabled={disableInputs ? true : false}
              type='password'
              id='register-password'
              ref={passwordRef}
              placeholder='Password'
              required
            ></input>
            {errors.password ? (
              <span className='form__error'>{errors.password}</span>
            ) : (
              ''
            )}

            {signinFailed ? (
              <span className='form__error'>
                {badRequest
                  ? 'Invalid email or password'
                  : 'Something went wrong, please try again'}
              </span>
            ) : (
              ''
            )}

            <button
              type='submit'
              className={`popup__submit
              ${!errors ? 'popup__submit_active' : ''}`}
            >
              {isRegisterPopup ? 'Sign up' : 'Sign in'}
            </button>
          </form>

          <p className='popup__form-text'>
            or&nbsp;
            <button
              onClick={handleRegisterPopup}
              className='popup__form-button'
            >
              Sign up
            </button>
          </p>
        </>
      );
    }
  }

  return <>{isFormPopupOpen ? handleRegister() : ''}</>;
};

export default PopupWithForm;
