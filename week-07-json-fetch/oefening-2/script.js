const filmsSection = document.querySelector('#films');

fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    for(let film of movies)
        filmsSection.innerHTML += `
        <h3>${film.title}</h3>
        <p>${film.director}</p>
        <p>${film.year}</p>
        <p>${film.genre}</p>

        `
  })

