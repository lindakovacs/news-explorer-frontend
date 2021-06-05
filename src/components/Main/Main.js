import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

const Main = ({
  isLoggedIn,
  isLoading,
  setIsLoading,
  handlePopup,
  addArticleHandler,
  getUserArticles,
  searchHandler,
  deleteArticleHandler,
}) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(0);

  async function saveArticle({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) {
    if (!isLoggedIn) {
      handlePopup();
      return false;
    }

    return addArticleHandler({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    })
      .then((res) => {
        if (res) {
          localStorage.removeItem('articles');
          return res._id;
        }
        return false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function renderCardList() {
    if (isLoading) {
      return <Preloader />;
    } else if (!isLoading && visibleCards > 0) {
      if (!cards) {
        return <NotFound error={true} />;
      } else if (cards.length === 0) {
        return <NotFound error={false} />;
      } else if (cards) {
        return (
          <NewsCardList
            isSavedNews={false}
            isLoggedIn={isLoggedIn}
            cards={cards}
            setCards={setCards}
            visibleCards={visibleCards}
            setVisibleCards={setVisibleCards}
            saveArticle={saveArticle}
            deleteArticleHandler={deleteArticleHandler}
          />
        );
      }
    }
    return;
  }

  return (
    <div className='main'>
      <SearchForm
        setCards={setCards}
        setVisibleCards={setVisibleCards}
        setIsLoading={setIsLoading}
        isLoggedIn={isLoggedIn}
        getUserArticles={getUserArticles}
        searchHandler={searchHandler}
      />

      {renderCardList()}

      <About />
    </div>
  );
};

export default Main;