// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is
let input = document.querySelector("#input")
let button1 = document.querySelector("#save")
let button2 = document.querySelector("#retrieve")
let output = document.querySelector("#result")

button1.addEventListener("click", () => {
    let InputValue = input.value.trim();
    localStorage.setItem("input value", InputValue)
})

button2.addEventListener("click", () => {
    let getItemFromStore = localStorage.getItem("input value")

    if (getItemFromStore === null) {
        output.textContent = "Er is nog niets opgeslagen."
    } else {
        output.textContent = getItemFromStore
    }
})
