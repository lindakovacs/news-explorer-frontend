import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  function togglePopup() {
    props.togglePopup(true);
    props.toggleFormPopup(true);
    props.toggleIsRegisterPopup(false);
    setIsNavOpen(false);
  }

  function handleSignout() {
    props.toggleLoggedIn(false);
    setIsNavOpen(false);
  }

  function toggleNavStatus() {
    if (props.isFormPopupOpen) {
      setIsNavOpen(false);
      props.togglePopup(false);
      props.toggleFormPopup(false);
    } else {
      setIsNavOpen(!isNavOpen);
    }
  }

  function navigationLink(activeClass) {
    if (props.isSavedNews && !isNavOpen) {
      return activeClass;
    } else if (props.isSavedNews && isNavOpen) {
      return '';
    } else {
      return '';
    }
  }
  return (
    <header className={`header ${isNavOpen ? 'header_nav-active' : ''}`}>
      <div className='header__size'>
        <p className={`header__logo ${navigationLink('header__logo_dark')} `}>
          NewsExplorer
        </p>

        <button
          onClick={toggleNavStatus}
          className={`header__icon ${isNavOpen ? 'header__icon_active' : ''}
          ${
            props.isFormPopupOpen || props.isPopupOpen
              ? 'header__icon_active'
              : ''
          }
          ${navigationLink('header__icon_dark')}`}
        ></button>
        <div
          className={`header__mobile-nav ${
            isNavOpen ? 'header__mobile-nav_visible' : ''
          }`}
        >
          <Navigation
            isLoggedIn={props.isLoggedIn}
            isSavedNews={props.isSavedNews}
            isNavOpen={isNavOpen}
            navigationLink={navigationLink}
          />

          {props.isLoggedIn ? (
            <button
              onClick={handleSignout}
              className={`header__logout
                ${navigationLink('header__logout_dark')}`}
            >
              {`${isNavOpen ? 'Sign out' : (currentUser.name = 'Linda')}`}
            </button>
          ) : (
            <button
              onClick={togglePopup}
              className={`header__signin
                ${navigationLink('header__signin_dark')}`}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;