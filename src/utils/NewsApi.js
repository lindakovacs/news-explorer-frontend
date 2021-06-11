import {
  PAGE_SIZE,
  SEARCH_INTERVAL,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
} from './configApi';

class NewsApi {
  constructor(options) {
    this.headers = options.headers;
    this._apiKey = options.apiKey;
    this._today = options.today;
    this._lastWeek = options.lastWeek;
    this._newsUrl = options.newsUrl;
    this._practicumUrl = options.practicumUrl;
    this._pageSize = options.pageSize;
    this._endpoint = options.endpoint;
  }

  search(keyword) {
    return fetch(
      // `${this.newsUrl}` +
        `${this._practicumUrl}` +
        `${this._endpoint}` +
        `q=${keyword}&` +
        `apiKey=${this._apiKey}&` +
        `from=${this._lastWeek.toISOString()}&` +
        `to=${this._today.toISOString()}&` +
        `pageSize=${this._pageSize}`,
        // `pageSize=${this._pageSize}&` +
        // `sortBy=popularity`,
      {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          Accept: 'application/json',
          // Authorization: this.apiKey,
        },
      }
    )
    // .then((res) => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   return Promise.reject(new Error(`Error: ${res.status}`));
    // })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => data.articles);
  }
}

const newsApi = new NewsApi({
  newsUrl: NEWS_URL,
  apiKey: API_KEY,
  today: new Date(),
  lastWeek: new Date(Date.now() - SEARCH_INTERVAL),
  practicumUrl: PROXY_URL,
  pageSize: PAGE_SIZE,
  endpoint: '/everything?',
});

export default newsApi;
