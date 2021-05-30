import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNews = ({ cards, isLoggedIn }) => {
  return (
    <section className='saved-news'>
      <NewsCardList
        cards={cards}
        isLoggedIn={isLoggedIn}
        isSavedNews={true}
      />
    </section>
  );
};

export default SavedNews;