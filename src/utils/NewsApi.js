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
    this.apiKey = options.apiKey;
    this.today = options.today;
    this.lastWeek = options.lastWeek;
    this.newsUrl = options.newsUrl;
    this.practicumUrl = options.practicumUrl;
    this.pageSize = options.pageSize;
    this.endpoint = options.endpoint;
  }

  search(keyword) {
    return (
      fetch(
        `${this.newsUrl}` +
          `${this.endpoint}` +
          `q=${keyword}&` +
          `apiKey=${this.apiKey}&` +
          `from=${this.lastWeek.toISOString()}&` +
          `to=${this.today.toISOString()}&` +
          `pageSize=${this.pageSize}&` +
          `sortBy=popularity`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => data.articles)
    );
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
