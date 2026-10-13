const container = document.getElementById("container")
const rekening = {
    eigenaar: "Jayden de Vries",
    saldo: 20,
    rekeningnummer: "NL26INGB883267359257",
    Geblokkeerd: false,
    pincode: "4256",
    daglimiet: 500,
    transactie: [],
    toonSaldo(){
        return this.saldo
    },

    changeSaldo(amount){
        this.saldo += amount


        this.transactie.push(amount)
        return `Het bedrag ${amount} is toegevoegd aan uw rekening` 
    }
}




console.log(rekening.transactie)
console.log(rekening.changeSaldo(1000))
console.log(rekening.toonSaldo())

container.innerHTML = `
<h2>${rekening.eigenaar}</h2>
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
`