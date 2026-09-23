let name = document.getElementById("name");
let role = document.getElementById("role");
let department = document.getElementById("department");
let button = document.getElementById("btn");
let section = document.getElementById("section");
let div = document.getElementById("profiles-list");

// Stap 1: Selecteer het formulier en de profielenlijst

// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=

// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
const form = document.querySelector("#profile-form");
const profilesList = document.querySelector("#profiles-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

const name = document.getElementById("name").value;
const role = document.getElementById("role").value;
const department = document.getElementById("department").value;

profilesList.innerHTML += `
<article>
  <h3>${name}</h3>
  <p><strong>Role:</strong> ${role}</p>
  <p><strong>Department:</strong> ${department}</p>
</article>
`;




form.reset(); // Reset the form fields after submission

}); 
