import NewsApiService from './js/news-service';

const form = document.querySelector('.form');
const list = document.querySelector('.articles__list');
const btn = document.querySelector('.load-more__button');

const newsApiService = new NewsApiService();
// console.log(newsApiService);
form.addEventListener('submit', onSearch);
btn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  // clearList();
  newsApiService.query = e.currentTarget.elements.query.value;

  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles => {
    clearList();
    renderNews(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles().then(renderNews);
}

function renderNews(articles) {
  const markUp = articles
    // .filter(article => {
    //   article.title !== '[Removed]' && article.description !== '[Removed]';
    // })
    .map(article => {
      return `<li class="item">
<a href="${article.url}" target="_blank" rel="noopener noreferrer">
<article>
<img src="${article.urlToImage}" alt="" width="480">
<h2>${article.title}</h2>
<p>Posted by: ${article.author}</p>
<p>${article.description}</p>
</article>
</a>
</li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markUp);
}

function clearList() {
  list.innerHTML = '';
}
