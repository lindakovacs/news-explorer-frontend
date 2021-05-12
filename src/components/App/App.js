import React, { useState } from 'react';
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

const App = () => {
  const [cards, setCards] = useState(allCards);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, toggleLoggedIn] = useState(false);
  const [isRegisterPopup, toggleIsRegisterPopup] = useState(false);
  const [isPopupOpen, togglePopup] = useState(false);
  const [isFormPopupOpen, toggleFormPopup] = useState(false);
  const [isRegisterSuccessPopupOpen, toggleRegisterSuccessPopup] = useState(
    false
  );
  const [isRegisterSuccess, toggleRegisterSuccess] = useState(false);

  function registrationSuccess() {
    toggleIsRegisterPopup(false);
    toggleRegisterSuccessPopup(false);
    toggleFormPopup(true);
  }
  function registrationFail() {
    toggleIsRegisterPopup(true);
    toggleRegisterSuccessPopup(false);
    toggleFormPopup(true);
  }
  const handleSignout = () => {
    toggleLoggedIn(false);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* <div className='app'> */}
      <div className='page'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header
                isLoggedIn={isLoggedIn}
                toggleLoggedIn={toggleLoggedIn}
                isPopupOpen={isPopupOpen}
                isFormPopupOpen={isFormPopupOpen}
                toggleIsRegisterPopup={toggleIsRegisterPopup}
                togglePopup={togglePopup}
                toggleFormPopup={toggleFormPopup}
                isSavedNews={false}
              />
              <Main isLoggedIn={isLoggedIn} cards={cards} />
              <Footer />
            </Route>
            <Route exact path='/saved-news'>
              <Header
                isLoggedIn={isLoggedIn}
                isSavedNews={true}
                isPopupOpen={isPopupOpen}
                isFormPopupOpen={isFormPopupOpen}
                toggleIsRegisterPopup={toggleIsRegisterPopup}
                toggleFormPopup={toggleFormPopup}
                togglePopup={togglePopup}
                toggleLoggedIn={toggleLoggedIn}
              />
              <SavedNewsHeader isLoggedIn={isLoggedIn} />
              <SavedNews
                isLoggedIn={isLoggedIn}
                cards={cards}
                handleSignout={handleSignout}
              />
              <Footer />
            </Route>
          </Switch>
          <Redirect from='*' to='/' />
        </Router>
        {isFormPopupOpen ? (
          <Popup
            togglePopup={togglePopup}
            toggleFormPopup={toggleFormPopup}
            isPopupOpen={isPopupOpen}
          >
            <PopupWithForm
              isRegisterPopup={isRegisterPopup}
              toggleIsRegisterPopup={toggleIsRegisterPopup}
              isFormPopupOpen={isFormPopupOpen}
              toggleFormPopup={toggleFormPopup}
              isRegisterSuccessPopupOpen={isRegisterSuccessPopupOpen}
              toggleRegisterSuccessPopup={toggleRegisterSuccessPopup}
              togglePopup={togglePopup}
              toggleLoggedIn={toggleLoggedIn}
              isRegisterSuccess={isRegisterSuccess}
              toggleRegisterSuccess={toggleRegisterSuccess}
            />
          </Popup>
        ) : (
          ''
        )}

        {isRegisterSuccessPopupOpen ? (
          <Popup
            isPopupOpen={isPopupOpen}
            togglePopup={togglePopup}
            toggleFormPopup={toggleFormPopup}
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
};

export default App;
