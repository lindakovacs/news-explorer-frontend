import React, { useState } from 'react';

const NewsCard = ({ isLoggedIn, isSavedNews, card }) => {
  const [isSaved, seIsSaved] = useState(false);

  function setDeleteSave() {
    if (isSavedNews && isLoggedIn) {
      return (
        <button className='news-card__delete-button'>
          <span className='news-card__save-button-label'>
            <p>Remove from saved</p>
          </span>
        </button>
      );
    } else if (!isSavedNews && isLoggedIn) {
      return (
        <button
          className={`news-card__save-button
          ${isSaved ? 'news-card__save-button_active' : ''}`}
          onClick={() => seIsSaved(!isSaved)}
        ></button>
      );
    } else {
      return (
        <button className='news-card__save-button'>
          <span className='news-card__save-button-label'>
            <p>Sign in to save articles</p>
          </span>
        </button>
      );
    }
  }

  function keywords() {
    if (isSavedNews) {
      return (
        <div className='news-card__keyword'>
          <p>
            {card.keyword[0].toUpperCase() + card.keyword.slice(1)}
          </p>
        </div>
      );
    }
  }

  return (
    <li className='news-card'>
      {setDeleteSave()}
      {keywords()}
      <img
        className='news-card__image'
        src={card.image}
        alt={card.title}
      />
      <div className='news-card__info-container'>
        <p className='news-card__date'>{card.date}</p>
        <h3 className='news-card__title'>{card.title}</h3>
        <p className='news-card__text'>{card.text}</p>
        <cite className='news-card__source'>{card.source}</cite>
      </div>
    </li>
  );
};

export default NewsCard;
