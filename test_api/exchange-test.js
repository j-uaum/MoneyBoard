let btn = document.querySelector(".enviar")
let real = document.querySelector(".real")
let res = document.querySelector(".res")
let dolar = 5.16

btn.addEventListener('click', ()=>{

let number = parseFloat(real.value)

res.innerHTML = number * dolar;


});




dashs[8].innerHTML = `<h2>Faça sua Conversão</h2><br><br> <div class="bloco"> <div class="cambio"> <input type="number" class="real"></div> <div class="dolar">5,16</div><div class="res"></div></div><div class="botao-cambio"><button class="enviar">Calcular!!!</button></div>` 
