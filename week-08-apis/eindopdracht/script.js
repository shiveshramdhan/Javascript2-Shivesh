const weatherInfo = document.querySelector('#weather-info');
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const searchButton = searchForm.querySelector('button');

const showMessage = (message) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  weatherInfo.replaceChildren(paragraph);
};

const showWeather = (data) => {
  const article = document.createElement('article');
  const heading = document.createElement('h2');
  const icon = document.createElement('img');
  const description = data.weather[0].description;

  heading.textContent = data.name;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = description;

  article.append(heading, icon);

  const details = [
    ['Weer', description],
    ['Temperatuur', `${Math.round(data.main.temp)} °C`],
    ['Gevoelstemperatuur', `${Math.round(data.main.feels_like)} °C`],
    ['Luchtvochtigheid', `${data.main.humidity}%`],
    ['Windsnelheid', `${data.wind.speed} m/s`],
  ];

  details.forEach(([label, value]) => {
    const row = document.createElement('p');
    const labelElement = document.createElement('span');
    const valueElement = document.createElement('span');

    labelElement.textContent = label;
    valueElement.textContent = value;
    row.append(labelElement, valueElement);
    article.append(row);
  });

  weatherInfo.replaceChildren(article);
};

const getWeather = async (city) => {
  searchButton.disabled = true;
  showMessage('Weer wordt opgehaald...');

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=nl`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || Number(data.cod) !== 200) {
      if (Number(data.cod) === 404) {
        showMessage('Deze stad is niet gevonden. Controleer de naam en probeer het opnieuw.');
      } else if (Number(data.cod) === 401) {
        showMessage('De API-key werkt niet. Controleer je key in config.js.');
      } else {
        showMessage('Het weer kon niet worden opgehaald. Probeer het later opnieuw.');
      }
      return;
    }

    showWeather(data);
  } catch (error) {
    console.error('Fout bij het ophalen van het weer:', error);
    showMessage('Er is iets misgegaan bij het ophalen van het weer. Controleer je internetverbinding en probeer het opnieuw.');
  } finally {
    searchButton.disabled = false;
  }
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showMessage('Vul eerst een plaatsnaam in.');
    return;
  }

  cityInput.value = '';
  getWeather(city);
});
