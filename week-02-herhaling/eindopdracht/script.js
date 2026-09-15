// Stap 1: Schrijf calculateTotal(bedrag, korting)
function calculateTotal(bedrag, korting) {
  // Bereken het totaalbedrag na korting en retourneer dit
  const totaal = bedrag - (bedrag * (korting / 100));
  return totaal;
}
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
document.querySelector('#discount-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const bedragInput = document.querySelector('#amount');
  const kortingInput = document.querySelector('#discount');
  const resultaat = document.querySelector('#result');

  if (bedragInput.value === '' || kortingInput.value === '') {
    resultaat.textContent = 'Vul het bedrag en de korting in.';
    return;
  }

  const bedrag = Number(bedragInput.value);
  const korting = Number(kortingInput.value);
  const totaal = calculateTotal(bedrag, korting);

  resultaat.textContent = totaal.toFixed(2);
});


// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

