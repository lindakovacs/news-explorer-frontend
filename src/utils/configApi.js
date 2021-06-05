const BASE_URL = 'http://localhost:3000';
//const BASE_URL = 'https://api.lkovacs.students.nomoreparties.site', //api back-end

// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://api.lkovacs.students.nomoreparties.site'
//     : 'http://localhost:3000';

const INITIAL_CARDS = 3;
const PAGE_SIZE = 100;
const SEARCH_INTERVAL = 7 * 24 * 3600 * 1000;
const API_KEY = 'c7bb67d0266f4b5c87185e2af7bbc706';
const NEWS_URL = 'http://newsapi.org/v2';
const PROXY_URL = 'http://nomoreparties.co/news/v2';

export {
  BASE_URL,
  PAGE_SIZE,
  INITIAL_CARDS,
  SEARCH_INTERVAL,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
};
