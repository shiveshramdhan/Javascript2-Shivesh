let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let showingFavorites = false;

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  const results = document.querySelector('#results');
  const cards = items.map((pokemon) => {
    const article = document.createElement('article');
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    image.alt = pokemon.name;
    image.loading = 'lazy';

    const name = document.createElement('h2');
    name.textContent = pokemon.name;

    const isFavorite = favorites.includes(pokemon.name);
    const button = document.createElement('button');
    button.className = `favorite-btn${isFavorite ? ' is-favorite' : ''}`;
    button.type = 'button';
    button.textContent = isFavorite ? 'Verwijder favoriet' : 'Voeg toe aan favorieten';
    button.setAttribute('aria-pressed', String(isFavorite));

    article.append(image, name, button);
    return article;
  });

  results.replaceChildren(...cards);

  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const name = items[i].name;
      if (favorites.includes(name)) {
        favorites = favorites.filter((favorite) => favorite !== name);
      } else {
        favorites.push(name);
      }

      saveFavorites();
      const visibleItems = showingFavorites
        ? allPokemon.filter((pokemon) => favorites.includes(pokemon.name))
        : items;
      showItems(visibleItems);
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));
    showItems(allPokemon);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

document.querySelector('#show-all').addEventListener('click', () => {
  showingFavorites = false;
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {
  showingFavorites = true;
  const favoritePokemon = allPokemon.filter((pokemon) => favorites.includes(pokemon.name));
  showItems(favoritePokemon);
});
