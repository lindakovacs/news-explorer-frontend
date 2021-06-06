import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';

const App = () => {
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
  const history = useHistory();

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

  async function getUserInfo(token) {
    const returnedUserInfo = await mainApi.getUserInfo(token);
    return returnedUserInfo;
  }

  function registerHandler(email, password, name) {
    return mainApi.register(email, password, name);
  }

  function signinHandler(email, password) {
    return mainApi.authorize(email, password);
  }

  // function signoutHandler() {
  //   setLoggedIn(false);
  //   localStorage.clear();
  //   return mainApi.logout();
  // }

function signoutHandler() {
  setLoggedIn(false);
  setIsNavOpen(false);
  localStorage.removeItem('articles');
  localStorage.removeItem('token');
  localStorage.removeItem('keyword-search');
  history.push('/');
}

  function getUserArticles(token) {
    localStorage.getItem('articles');
    return mainApi.getArticles(token);
  }

  function deleteArticleHandler(articleId) {
    if (articleId) {
      localStorage.removeItem('articles');
      return mainApi.deleteArticle(articleId);
    } else {
      throw new Error('News ID not deleted');
    }
  }

  function addArticleHandler(article) {
    if (article) {
      return mainApi.addArticle(article);
    } else {
      throw new Error('No article added');
    }
  }

  async function searchHandler(keyword) {
    return newsApi.search(keyword);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
          setServerError(false);
          setLoggedIn(true);
        })
        // .catch((err) => {
        //   if (err === 'Error: 401') {
        //     setLoggedIn(false);
        //     setServerError(false);
        //   } else {
        //     setServerError(true);
        //   }
        // });
        .catch((err) => console.log(err));
    }
    // setLoggedIn(false);
    // setServerError(false);
  }, []);

  function checkLoggedIn() {
    if (isLoggedIn === null && serverError === null) {
      return <Preloader />;
    } else if (serverError) {
      return <NotFound error={true} />;
    } else {
      return (
        <CurrentUserContext.Provider value={currentUser}>
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
                    isPopupOpen={isPopupOpen}
                    handlePopup={handlePopup}
                    isFormPopupOpen={isFormPopupOpen}
                    setIsPopupOpen={setIsPopupOpen}
                    setFormPopup={setFormPopup}
                    getUserArticles={getUserArticles}
                    addArticleHandler={addArticleHandler}
                    searchHandler={searchHandler}
                    deleteArticleHandler={deleteArticleHandler}
                  />
                  <Footer />
                </Route>
                <Route exact path='/saved-news'>
                  <Header
                    isLoggedIn={isLoggedIn}
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
                  <ProtectedRoute
                    component={SavedNews}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    setFormPopup={setFormPopup}
                    setIsPopupOpen={setIsPopupOpen}
                    handlePopup={handlePopup}
                    getUserArticles={getUserArticles}
                    deleteArticleHandler={deleteArticleHandler}
                    addArticleHandler={addArticleHandler}
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
                  currentUser={currentUser}
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
        </CurrentUserContext.Provider>
      );
    }
  }
  return checkLoggedIn();
};

export default App; 