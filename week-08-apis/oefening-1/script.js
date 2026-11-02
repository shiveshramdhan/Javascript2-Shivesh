const output = document.querySelector("#characters")
fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    for (Character of data.results){
      // console.log(CharacterData.name)
      output.innerHTML += `
      <h2>${Character.name}</h2>
      <p>${Character.status}</p>
      <img src="${Character.image}" alt="${Character.name}">
      `
      
    }

    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
  })
  .catch(error => console.error('Fout:', error));
