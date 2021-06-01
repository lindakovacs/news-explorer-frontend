import React, { useEffect, useRef, useState } from 'react';
import { INITIAL_CARDS } from '../../utils/configApi';

const SearchForm = ({
  setCards,
  setVisibleCards,
  setIsLoading,
  isLoggedIn,
  getUserArticles,
  searchHandler,
}) => {
  const searchRef = useRef();
  const [disableInputs, setInputDisable] = useState(false);

  function searchSort(saveNews) {
    searchHandler(searchRef.current.value)
      .then((res) => {
        let newArticles = [];
        let urlArr = [];
        if (!saveNews) {
          throw new Error('Saved articles failed');
        } else if (saveNews.length === 0 || null) {
          res.articles.forEach((article) => {
            article.keyword = searchRef.current.value;
            newArticles.push(article);
          });
          return newArticles;
        } else {
          saveNews.forEach((card) => {
            urlArr.push(card.url);
          });
          res.articles.forEach((article) => {
            if (urlArr.includes(article.url)) {
              article.isSaved = true;
              saveNews.forEach((card) => {
                if (card.url === article.url) {
                  article._id = card._id;
                }
                return;
              });
            }
            article.keyword = searchRef.current.value;
            newArticles.push(article);
            return;
          });
        }
        return newArticles;
      })
      .then((articles) => {
        if (articles) {
          setVisibleCards(INITIAL_CARDS);
          setCards(articles);
          return;
        } else {
          setIsLoading(false);
          disableInputs(false);
          throw new Error('Unhandled request error');
        }
      })
      .then(() => {
        setIsLoading(false);
        setInputDisable(false);
      })
      .catch((err) => {
        setInputDisable(false);
        console.log(err);
      });
  }

  function newsSearch() {
    setInputDisable(true);
    localStorage.setItem('keyword', searchRef.current.value);
    if (searchRef.current.value.length > 0) {
      setIsLoading(true);

      if (!isLoggedIn) {
        searchHandler(searchRef.current.value)
          .then((res) => {
            let newArticles = [];
            res.articles.forEach((article) => {
              article.keyword = searchRef.current.value;
              newArticles.push(article);
            });
            return newArticles;
          })
          .then((articles) => {
            if (articles) {
              setVisibleCards(INITIAL_CARDS);
              setCards(articles);
              return;
            } else {
              setIsLoading(false);
              throw new Error('Unhandled request error');
            }
          })
          .then(() => {
            setInputDisable(false);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        return;
      }

      let saveNews;

      if (localStorage.getItem('articles')) {
        saveNews = JSON.parse(localStorage.getItem('articles'));
        searchSort(saveNews);
        return;
      } else {
        getUserArticles()
          .then((res) => {
            let newCards = [];
            res.forEach((card) => {
              const newCard = {
                _id: card._id,
                keyword: card.keyword,
                publishedAt: card.date,
                title: card.title,
                description: card.text,
                source: card.source,
                url: card.link,
                urlToImage: card.image,
              };

              newCards.push(newCard);
            });
            return newCards;
          })
          .then((newCards) => {
            localStorage.setItem('articles', JSON.stringify(newCards));
            searchSort(newCards);
            return;
          })
          .catch((err) => {
            console.log(err);
          });
        return;
      }
    }
    return;
  }

  function searchEventHandler(e) {
    e.preventDefault();
    newsSearch();
  }

  function handleEnterKey(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
      searchEventHandler(e);
    }
    return;
  }

  useEffect(() => {
    const searchResults = localStorage.getItem('recent-search-keyword');
    if (searchResults) {
      searchRef.current.value = searchResults;
      newsSearch();
      return;
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <section className='search-container'>
      <div className='search-container__content'>
        <h2 className='search-container__title'>
          What's going on in the world?
        </h2>
        <p className='search-container__subtitle'>
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <form onSubmit={searchEventHandler} className='search-bar'>
          {/* <span
             id={`${props.name}-error`}
            className={`search__input-error ${
               keywordValid ? '' : 'search__input-error_visible'
             }`}
           >
             Please enter a keyword
           </span> */}
          <input
            ref={searchRef}
            onKeyUp={handleEnterKey}
            type='text'
            placeholder='Enter topic'
            className={`search-bar__input ${
              disableInputs ? 'search-bar__input_disabled' : ''
            }`}
            disabled={disableInputs}
          />
          <button type='submit' className='search-bar__button'>
            Search
          </button>
          {/* <button
             className={`search-bar__button ${
               keywordValid ? 'search-bar__button' : 'search-bar__button_disabled'
             }`}
             disabled
             onClick={submit}
           >
             Search
           </button> */}
        </form>
      </div>
    </section>
  );
};

export default SearchForm;