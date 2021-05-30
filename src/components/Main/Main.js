import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

const Main = ({ cards, isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='main'>
      <SearchForm setIsLoading={setIsLoading} />
      {isLoading ? (
        <div>
          <Preloader />
          <NotFound />
        </div>
      ) : (
        <NewsCardList
          cards={cards}
          isSavedNews={false}
          isLoggedIn={isLoggedIn}
        ></NewsCardList>
      )}
      <About />
    </div>
  );
};

export default Main;