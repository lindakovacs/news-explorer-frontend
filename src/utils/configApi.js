// const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://api.lkovacs.students.nomoreparties.site'; //api back-end

// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://api.lkovacs.students.nomoreparties.site'
//     : 'http://localhost:3000';

const INITIAL_CARDS = 3;
const PAGE_SIZE = 100;
const SEARCH_INTERVAL = 7 * 24 * 3600 * 1000;
// const API_KEY = 'c7bb67d0266f4b5c87185e2af7bbc706'; // old API KEY 1
// const API_KEY = '506741011cfa4682bfdb0c0398f42d0a'; // new API KEY 2
const API_KEY = '955ec7a803e045d8982c597a789f7166'; // new API KEY 3
const NEWS_URL = 'https://newsapi.org/v2';
const PROXY_URL = 'https://nomoreparties.co/news/v2';

export {
  // BASE_URL,
  PAGE_SIZE,
  INITIAL_CARDS,
  SEARCH_INTERVAL,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
};
