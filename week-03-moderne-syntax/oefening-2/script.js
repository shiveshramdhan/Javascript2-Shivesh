// Voeg een event listener toe aan elke knop
let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
let message = document.getElementById("message");
let list = document.getElementById('list')


// Knop 1: voeg tekst toe aan #message
button1.addEventListener("click", () => {
 message.textContent = "Hallo ik ben Shivesh"
})
// Knop 2: voeg een <li> toe aan #list met een tekst
button2.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "hallo jij hebt geklikt!";
        list.appendChild(li);
})
// Knop 3: wissel de klasse 'active' op #message
button3.addEventListener("click", () => {
    message.classList.toggle("active");
})