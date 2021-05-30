import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Popup from '../Popup/Popup';
import { allCards } from '../data/data';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';

const App = () => {
  const [cards, setCards] = useState(allCards);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRegisterPopup, setIsRegisterPopup] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFormPopupOpen, setFormPopup] = useState(false);
  const [isRegisterSuccessPopupOpen, setRegisterSuccessPopup] = useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserInfo()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setServerError(false);
            setLoggedIn(true);
            return;
          }
        })
        .catch((err) => {
          if (err === 'Error: 401') {
            setLoggedIn(false);
            setServerError(false);
          } else {
            setServerError(true);
            console.log(err);
            return;
          }
        });
      return;
    }
    setLoggedIn(false);
    setServerError(false);
    return;
  }, []);

  function registrationSuccess() {
    setIsRegisterPopup(false);
    setRegisterSuccessPopup(false);
    setFormPopup(true);
  }
  function registrationFail() {
    setIsRegisterPopup(true);
    setRegisterSuccessPopup(false);
    setFormPopup(true);
  }
  const handlePopup = useCallback(() => {
    setIsPopupOpen(true);
    setFormPopup(true);
    setIsRegisterPopup(false);
    setIsNavOpen(false);
  }, [setIsPopupOpen, setFormPopup, setIsRegisterPopup, setIsNavOpen]);

  async function getUserInfo() {
    const returnedUserInfo = await mainApi.getUserInfo();
    return returnedUserInfo;
  }

  function registerHandler(email, password, name) {
    return mainApi.register(email, password, name);
  }

  function signinHandler(email, password) {
    return mainApi.authorize(email, password);
  }

  function signoutHandler() {
    setLoggedIn(false);
    localStorage.clear();
    return mainApi.logout();
  }

  function checkLoggedIn() {
    if (isLoggedIn === null && serverError === null) {
      return <Preloader />;
    } else if (serverError) {
      return <NotFound error={true} />;
    } else {
      return (
        <CurrentUserContext.Provider value={currentUser}>
          {/* <div className='app'> */}
          <div className='page'>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Header
                    isLoggedIn={isLoggedIn}
                    setLoggedIn={setLoggedIn}
                    isPopupOpen={isPopupOpen}
                    isFormPopupOpen={isFormPopupOpen}
                    setIsRegisterPopup={setIsRegisterPopup}
                    setIsPopupOpen={setIsPopupOpen}
                    setFormPopup={setFormPopup}
                    isSavedNews={false}
                    signoutHandler={signoutHandler}
                    handlePopup={handlePopup}
                    setIsNavOpen={setIsNavOpen}
                    isNavOpen={isNavOpen}
                  />
                  <Main
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    cards={cards}
                    isPopupOpen={isPopupOpen}
                    handlePopup={handlePopup}
                    isFormPopupOpen={isFormPopupOpen}
                    setIsPopupOpen={setIsPopupOpen}
                    setFormPopup={setFormPopup}
                  />
                  <Footer />
                </Route>
                <Route exact path='/saved-news'>
                  <Header
                    isLoggedIn={isLoggedIn}
                    cards={cards}
                    isSavedNews={true}
                    isPopupOpen={isPopupOpen}
                    isFormPopupOpen={isFormPopupOpen}
                    setIsRegisterPopup={setIsRegisterPopup}
                    setFormPopup={setFormPopup}
                    setIsPopupOpen={setIsPopupOpen}
                    setLoggedIn={setLoggedIn}
                    signoutHandler={signoutHandler}
                    handlePopup={handlePopup}
                    setIsNavOpen={setIsNavOpen}
                    isNavOpen={isNavOpen}
                  />
                  <SavedNewsHeader isLoggedIn={isLoggedIn} />
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    cards={cards}
                    signoutHandler={signoutHandler}
                  />
                  <ProtectedRoute
                    component={SavedNews}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    setFormPopup={setFormPopup}
                    setIsPopupOpen={setIsPopupOpen}
                    handlePopup={handlePopup}
                  />
                  <Footer />
                </Route>
              </Switch>
              <Redirect from='*' to='/' />
            </Router>
            {isFormPopupOpen ? (
              <Popup
                setIsPopupOpen={setIsPopupOpen}
                setFormPopup={setFormPopup}
                isPopupOpen={isPopupOpen}
              >
                <PopupWithForm
                  isRegisterPopup={isRegisterPopup}
                  setIsRegisterPopup={setIsRegisterPopup}
                  isFormPopupOpen={isFormPopupOpen}
                  setFormPopup={setFormPopup}
                  isRegisterSuccessPopupOpen={isRegisterSuccessPopupOpen}
                  setRegisterSuccessPopup={setRegisterSuccessPopup}
                  setIsPopupOpen={setIsPopupOpen}
                  setLoggedIn={setLoggedIn}
                  isRegisterSuccess={isRegisterSuccess}
                  setRegisterSuccess={setRegisterSuccess}
                  registerHandler={registerHandler}
                  getUserInfo={getUserInfo}
                  setCurrentUser={setCurrentUser}
                  signinHandler={signinHandler}
                />
              </Popup>
            ) : (
              ''
            )}

            {isRegisterSuccessPopupOpen ? (
              <Popup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                setFormPopup={setFormPopup}
              >
                {isRegisterSuccess ? (
                  <>
                    <h2 className='popup__title'>
                      Registration completed successfully!
                    </h2>
                    <button
                      className='popup__form-text popup__form-button'
                      onClick={registrationSuccess}
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className='popup__title'>Oops! Something went wrong</h2>
                    <button
                      className='popup__form-text popup__form-button'
                      onClick={registrationFail}
                    >
                      Try again
                    </button>
                  </>
                )}
              </Popup>
            ) : (
              ''
            )}
          </div>
          {/* </div> */}
        </CurrentUserContext.Provider>
      );
    }
  }
  return checkLoggedIn();
};

export default App;
