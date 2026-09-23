
let getname = document.getElementById("showName");


// function showName(name){
//     return "My name is " + name;
// }


const showName = (name) => {
    return `My name is  ${name}`;
}

 getname.textContent = showName("Shivesh");


 let fruits = ["mango", "banaan", "perzik", "appel", "granaatappel"]

 for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
 }

 let title = document.getElementById("title");
 let btn = document.getElementById("btn");
 let section = document.getElementById("section");

 btn.addEventListener("click", () => {
     title.textContent = "ik heb geklikt!";
     title.classList.toggle("active");

     const p = document.createElement("p");
     p.textContent = "ik ben een paragraaf";
        section.appendChild(p);
     
 })