let allArticles = [];

const showArticles = (articles) => {
  const articleElements = articles.map(article => {
    const articleElement = document.createElement('article');
    const title = document.createElement('h2');
    const category = document.createElement('p');
    const summary = document.createElement('p');

    title.textContent = article.title;
    category.textContent = article.category;
    summary.textContent = article.summary;

    articleElement.append(title, category, summary);
    return articleElement;
  });

  document.querySelector('#articles').replaceChildren(...articleElements);
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Stad'));
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Technologie'));
});

document.querySelector('#filter-media').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Media'));
});
