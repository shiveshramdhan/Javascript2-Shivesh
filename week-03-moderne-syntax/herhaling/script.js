let title = document.getElementById("title");
let btn = document.getElementById("btn");
let section = document.getElementById("section");

const naam = "Shivesh";
const opleiding = "software developer leerjaar 2";
let aantalKlikken = 0;

const berekenPunten = (aantalKlikken) => aantalKlikken * 10;

btn.addEventListener("click", () => {
    aantalKlikken++;
    title.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}`;
    title.classList.toggle("active");

    const p = document.createElement("p");
    p.textContent = `Je hebt nu ${aantalKlikken} keer geklikt en ${berekenPunten(aantalKlikken)} punten.`;
    section.appendChild(p);
});

