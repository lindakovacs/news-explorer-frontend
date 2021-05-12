import React from 'react';
// import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = (props) => {
  // const [count, setCount] = useState(3);
  return (
    <section className='news-card-list'>
      <div className='news-card-list__wrapper'>
        {!props.isSavedNews ? (
          <h2 className='news-card-list__title'>Search results</h2>
        ) : (
          ''
        )}

        <ul className='news-card-list__container'>
          {props.cards &&
            props.cards
              .slice(0, 3)
              .map((card, i) => (
                <NewsCard
                  isSavedNews={props.isSavedNews}
                  isLoggedIn={props.isLoggedIn}
                  key={card._id}
                  card={card}
                  index={i}
                />
              ))}
        </ul>

        {!props.isSavedRoute ? (
          <button
            className='news-card-list__show-more'
            // onClick={() => setCount(count + 3)}
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