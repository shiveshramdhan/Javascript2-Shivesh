// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
let itemInput = document.getElementById("iteminput");
const Button = document.getElementById("add");
let List = document.getElementById("list");

Button.addEventListener("click", () => {
    const input = itemInput.value.trim()

    const lijst = document.createElement('li');
    lijst.textContent = input
    const verwijderknop = document.createElement("button");
    verwijderknop.textContent = "verwijderen";
    lijst.appendChild(verwijderknop);

    verwijderknop.addEventListener("click", () => {
        lijst.remove();
    })

    List.appendChild(lijst);
    itemInput.value = "";
})

