
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