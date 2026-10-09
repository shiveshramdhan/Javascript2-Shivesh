const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
  const productsContainer = document.querySelector('#products');
  const counter = document.querySelector('#counter');

  productsContainer.replaceChildren();
  list.forEach((product) => {
    const article = document.createElement('article');
    article.textContent = product;
    productsContainer.append(article);
  });
  counter.textContent = `${list.length} producten`;
};

const filterProducts = () => {
  const filtered = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (sorting === 'az') {
    filtered.sort((a, b) => a.localeCompare(b, 'nl', { sensitivity: 'base' }));
  } else if (sorting === 'za') {
    filtered.sort((a, b) => b.localeCompare(a, 'nl', { sensitivity: 'base' }));
  }

  showProducts(filtered);
};

document.querySelector('#search-bar').addEventListener('input', (event) => {
  searchTerm = event.target.value;
  filterProducts();
});

document.querySelector('#sort-az').addEventListener('click', () => {
  sorting = 'az';
  filterProducts();
});

document.querySelector('#sort-za').addEventListener('click', () => {
  sorting = 'za';
  filterProducts();
});

filterProducts();
