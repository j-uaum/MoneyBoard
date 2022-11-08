let btn = document.querySelector(".enviar")
let real = document.querySelector(".real")
let res = document.querySelector(".res")
let dolar = 5.16

btn.addEventListener('click', ()=>{

let number = parseFloat(real.value)

res.innerHTML = number * dolar;


});

