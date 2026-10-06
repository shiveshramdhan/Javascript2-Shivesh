const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
const findForm = document.getElementById('form-find');
const findInput = document.getElementById('search-find');
const findOutput = document.getElementById('output-find');

findForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstLetter = findInput.value.trim().toLowerCase();
  const match = firstLetter
    ? names.find((name) => name.toLowerCase().startsWith(firstLetter))
    : undefined;

  findOutput.textContent = firstLetter
    ? (match ?? 'Geen naam gevonden.')
    : 'Voer een beginletter in.';
  findInput.value = '';
});

// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
const includesForm = document.getElementById('form-includes');
const includesInput = document.getElementById('search-includes');
const includesOutput = document.getElementById('output-includes');

includesForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchedName = includesInput.value.trim().toLowerCase();
  const matchingNames = names.map((name) => name.toLowerCase());

  includesOutput.textContent = searchedName
    ? String(matchingNames.includes(searchedName))
    : 'Voer een naam in.';
  includesInput.value = '';
});
