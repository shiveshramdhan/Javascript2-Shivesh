

let input = document.querySelector("#input")
let button = document.querySelector("#button")


button.addEventListener("click", () => {
   let InputValue = input.value.trim();
   localStorage.setItem("input value", InputValue)
})

let getItemFromStore = localStorage.getItem("input value");

console.log(getItemFromStore)