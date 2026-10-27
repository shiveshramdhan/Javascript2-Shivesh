 let carslist = document.getElementById("carslist")

fetch("./cars.json")
.then(Response => Response.json())
.then(data =>{
    for(let car of data){
   carslist.innerHTML += `
   
   <h3>${car.name}</h3>
   <p>${car.model}</P>
   <p>${car.weight}</p>
   <p>${car.color}</P>
   `
}
})




