import React, { useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNewsHeader = ({ saveNews, sortKeyword }) => {

  const currentUser = useContext(CurrentUserContext);
  
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  function keywordList() {
    if (sortKeyword.length === 1) {
      return `${capitalize(sortKeyword[0])}`;
    } else if (sortKeyword.length === 2) {
      return `${capitalize(sortKeyword[0])} and ${capitalize(
        sortKeyword[1]
      )}`;
    } else if (sortKeyword.length === 3) {
      return `${capitalize(sortKeyword[0])}, ${capitalize(
        sortKeyword[1]
      )}, and ${capitalize(sortKeyword[2])}`;
    } else {
      return `${capitalize(sortKeyword[0])}, ${capitalize(
        sortKeyword[1]
      )}, and ${sortKeyword.length - 2} others`;
    }
  }

  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__label'>Saved articles</p>
        <h2 className='saved-news-header__title'>
          {currentUser.name}, you have{' '}
          {saveNews && saveNews.length > 0 ? saveNews.length : 'no'} saved
          articles
        </h2>
        {sortKeyword && sortKeyword.length > 0 ? (
          <p className='saved-news-header__keyword-text'>
            By keywords:{' '}
            <span className='saved-news-header__keywords'>{keywordList()}</span>
          </p>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default SavedNewsHeader;