
let input = document.querySelector(".input-moeda")
let btn = document.querySelector(".btn-convert")
let moeda1 = document.querySelector("#othercc1")
let moeda2 = document.querySelector("#othercc2")
let moeda3 = document.querySelector("#othercc3")
let moeda4 = document.querySelector("#othercc4")
let moeda5 = document.querySelector("#othercc5")
let select = document.querySelector(".cambio-select")
let cont = document.querySelector(".container")



fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,RUB-BRL,KRW-USD") // use api
.then((res)=>{ // pegando o arquivo e transformando em json
    return res.json() // retornando o json
})
.then((data)=>{ // eu nao sei oq é mas parece que os then sao ligados só por serem then, enfim, esse then ja recebeu os dados
    const dolar = data.USDBRL // pegando valor dolar
    const euro = data.EURBRL
    const libra = data.GBPBRL
    const rublo = data.RUBBRL
    const won = data.KRWUSD

function choose (){
/*micro acessa o select que acessa as option "que são um array" dps faz um indice e retorna o valor de cada opção*/ 
let micro = select.options[select.selectedIndex].value 
// assim que acessa valor de select e faz condicional
   if(micro == "dolar"){
    return dolar.high;
 } else if(micro == "euro"){
    return euro.high;
 }else if(micro == "libra"){
    return libra.high;
 }else if(micro == "rublo"){
    return rublo.high;
 }else if(micro == "won"){
    return won.high;
 } 

}

function calc (){
        let vv = parseFloat(input.value)
        let currency = choose()
        let cc = parseFloat(currency)
        let total = vv / cc
        return parseFloat(total).toLocaleString('pt-br', {style:'currency', currency: 'USD'});
    }

    window.onload = function moedas(){

        moeda1.innerHTML = `<h3>Dólar americano</h3> <p>${parseFloat(dolar.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        moeda2.innerHTML = `<h3>Euro</h3> <p>${parseFloat(euro.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        moeda3.innerHTML = `<h3>Libra Esterlina</h3> <p>${parseFloat(libra.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        moeda4.innerHTML = `<h3>Rublo Russo</h3> <p>${parseFloat(rublo.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        moeda5.innerHTML = `<h3>Won Sul-Coreano</h3> <p>US$ ${won.high}</p>`

    }

btn.addEventListener('click', ()=>{
    cont.innerHTML = `<div class="novo-container"><h2 class="titulo-res">Resultado</h2>
         <p class="paragrafo-res">Sua conversão está pronta</p>
         <p class="paragrafo-res>Então não se preocupe, sua conversão está atrelada a cotação em tempo real</p>
       <span class="display-res">${calc()}</span></div> 
       <a href="conversor.html"><button class="btn-voltar">Voltar</button></a>` 

console.log(dolar.high)

    })
});



