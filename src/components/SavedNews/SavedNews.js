import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNews = (props) => {
  return (
    <section className='saved-news'>
      <NewsCardList
        cards={props.cards}
        isLoggedIn={props.isLoggedIn}
        isSavedNews={true}
      />
    </section>
  );
};

export default SavedNews;