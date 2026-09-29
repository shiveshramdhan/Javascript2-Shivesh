const button = document.getElementById("btn");
let SongList = document.getElementById("songlist");
const songInput = document.getElementById("songinput");

button.addEventListener('click', () => {
    const input = songInput.value.trim()

    const lijst = document.createElement('li');
    lijst.textContent = input

    const verwijderknop = document.createElement("button");
    verwijderknop.textContent = "verwijderen";
    lijst.appendChild(verwijderknop);

    verwijderknop.addEventListener("click", () => {
        lijst.remove();
    })

    SongList.appendChild(lijst);
    songInput.value = "";

    
    

})