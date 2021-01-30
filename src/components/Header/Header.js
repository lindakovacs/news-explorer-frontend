import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './../images/logo.svg';
import logout from '../../images/logout.svg';

function Header(props) {
  return (
    <header className='header'>
      <p>
        <a href='/' className='header__logo'>
          NewsExplorer
        </a>
      </p>
      <div className='header__nav'>
        <Link
          className='header__nav-link'
          activeClassName='header__nav-link_selected'
          to='/'
        >
          Home
        </Link>
        <Link
          className={`header__nav-link ${
            props.loggedIn ? '' : 'header__nav-link_hidden'
          }`}
          to='/saved-news'
        >
          Saved articles
        </Link>
        {/* <button className='button header__button' onClick={headerButtonClick}>
          {props.loggedIn ? `${currentUser.name}` : 'Sign in'} */}
          <img
            className={
              props.loggedIn
                ? `header__image`
                : 'header__image header__image_hidden'
            }
            src={logout}
            alt='logout'
          />
        {/* </button> */}
      </div>
      {/* <img className='header__logo' src={logo} alt='logo' /> */}
      {/* <p className='header__email'>{props.loggedIn ? props.userEmail : ''}</p> */}

      {/* <Link
        to={props.link.to}
        className='header__link'
        onClick={props.onLogout ? props.onLogout : null}
      >
        {props.link.description}
      </Link> */}
    </header>
  );
}
export default Header;
