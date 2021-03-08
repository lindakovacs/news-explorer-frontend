import React from 'react';
// import React, { useState } from 'react';

const SearchForm = (props) => {
  // const [keywordValid, setKeywordValid] = useState(true);
  function submit() {
    props.setIsLoading(true);
    setTimeout(() => {
      props.setIsLoading(false);
    }, 3000);
  }

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
        <div className='search-bar'>
          {/* <span
            id={`${props.name}-error`}
            className={`search__input-error ${
              keywordValid ? '' : 'search__input-error_visible'
            }`}
          >
            Please enter a keyword
          </span> */}
          <input
            type='text'
            placeholder='Enter topic'
            className='search-bar__input'
          />
          <button className='search-bar__button' onClick={submit}>
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
        </div>
      </div>
    </section>
  );
};

export default SearchForm;