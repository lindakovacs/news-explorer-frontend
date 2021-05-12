import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNewsHeader = (props) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__label'>Saved articles</p>
        <h2 className='saved-news-header__title'>
          {currentUser.name}, you have 3 {/*props.isSavedNews.length */} saved
          articles
          {/* {props.isSavedNews.length !== 1 ? 's' : ''}. */}
        </h2>
        <p className='saved-news-header__keyword-text'>
          By keywords:{' '}
          <span className='saved-news-header__keywords'>Science</span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;