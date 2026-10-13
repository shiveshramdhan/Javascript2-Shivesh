const originele = document.getElementById('origineel')
const kopie = document.getElementById('kopie')
const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];



const origineleLijst = people.map(({ name, city }) => ({ name, city }))
const gewijzigdeKopie = people.map((persoon) => ({
  ...persoon,
  city: 'Den Haag',
}))

originele.innerHTML += `<ul>${origineleLijst.map(({ name, city }) => 
  `<li>${name}: ${city}</li>`).join('')}</ul>`
kopie.innerHTML += `<ul>${gewijzigdeKopie.map(({ name, city }) => 
  `<li>${name}: ${city}</li>`).join('')}</ul>`