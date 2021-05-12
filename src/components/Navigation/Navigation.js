import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  function savedArticlesLink() {
    if (props.isLoggedIn) {
      return (
        <NavLink
          to='/saved-news'
          exact={true}
          activeClassName='navigation__link_active_dark'
          className={`navigation__link ${props.navigationLink('navigation__link_dark')}`}
        >
          Saved articles
        </NavLink>
      );
    } else {
      return;
    }
  }

  return (
    <div className={`navigation ${props.isNavOpen ? 'navigation_active' : ''}`}>
      <NavLink
        to='/'
        exact={true}
        activeClassName='navigation__link_active'
        className={`navigation__link ${props.navigationLink('navigation__link_dark')}`}
      >
        Home
      </NavLink>
      {savedArticlesLink()}
    </div>
  );
};

export default Navigation;