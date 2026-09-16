// Stap 1: Schrijf calculateTotal(bedrag, korting)
function calculateTotal(bedrag, korting) {
  // Bereken het totaalbedrag na korting en retourneer dit
  const totaal = bedrag - (bedrag * (korting / 100));
  return totaal;
}
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
let inputbedrag = document.getElementById("amount");
let inputkorting = document.getElementById("discount");
let btncalc = document.getElementById("btncalc");
let result = document.getElementById("result");

btncalc.addEventListener("click", function(e) {
  e.preventDefault();
 result.textContent = inputbedrag.value / 100 * inputkorting.value;
 inputbedrag.value = "";
 inputkorting.value = "";
})


// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

