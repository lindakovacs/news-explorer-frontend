
import React, { useState } from 'react';

import NewsCard from '../NewsCard/NewsCard';
import NotFound from '../NotFound/NotFound';

import { PAGE_SIZE, INITIAL_CARDS } from '../../utils/configApi';

const NewsCardList = ({
  cards,
  isSavedNews,
  isLoggedIn,
  deleteArticleHandler,
  saveArticle,
  setIsPopupOpen,
  visibleCards,
  setVisibleCards,
}) => {
  const [showMore, setShowMore] = useState(false);
  // const [visibleCards, setVisibleCards] = useState({});

  function incrementDisplayedCards() {
    if (visibleCards > PAGE_SIZE) {
      setShowMore(true);
      return;
    } else {
      const newVisibleCards = visibleCards + INITIAL_CARDS;
      setVisibleCards(newVisibleCards);
    }
  }

  function renderCardList() {
    if (cards.length === 0) {
      return <NotFound error={false} />;
    } else if (cards) {
      return cards.slice(0, visibleCards).map((card) => {
        return (
          <NewsCard
            key={card.link}
            _id={card._id}
            keyword={card.keyword}
            date={card.publishedAt}
            title={card.title}
            description={card.description}
            source={card.source.name}
            url={card.url}
            image={card.urlToImage}
            isSaved={card.isSaved}
            isSavedNews={isSavedNews}
            isLoggedIn={isLoggedIn}
            deleteArticleHandler={deleteArticleHandler}
            saveArticle={saveArticle}
            setIsPopupOpen={setIsPopupOpen}
          />
        );
      });
    } else {
      return <NotFound error={true} />;
    }
  }

  return (
    <section className='news-card-list'>
      <div className='news-card-list__width'>
        {!isSavedNews ? (
          <h2 className='news-card-list__title'>Search results</h2>
        ) : (
          ''
        )}
        <ul className='news-card-list__container'>{renderCardList()}</ul>

        {!isSavedNews && !showMore ? (
          <button
            onClick={incrementDisplayedCards}
            className='news-card-list__show-more'
          >
            Show more
          </button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default NewsCardList;