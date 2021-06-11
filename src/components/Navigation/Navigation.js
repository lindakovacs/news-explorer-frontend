import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isLoggedIn, navigationLink, isNavOpen }) => {
  function savedArticlesLink() {
    if (isLoggedIn) {
      return (
        <NavLink
          to='/saved-news'
          exact={true}
          activeClassName='navigation__link_active_dark'
          className={`navigation__link ${navigationLink(
            'navigation__link_dark'
          )}`}
        >
          Saved articles
        </NavLink>
      );
    } else {
      return;
    }
  }

  return (
    <div className={`navigation ${isNavOpen ? 'navigation_active' : ''}`}>
      <NavLink
        to='/'
        exact={true}
        activeClassName='navigation__link_active'
        className={`navigation__link ${navigationLink(
          'navigation__link_dark'
        )}`}
      >
        Home
      </NavLink>
      {savedArticlesLink()}
    </div>
  );
};

export default Navigation;