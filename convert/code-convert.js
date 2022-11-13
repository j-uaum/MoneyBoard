
let input = document.querySelector(".input-moeda")
let btn = document.querySelector(".btn-convert")
let span = document.querySelector(".display-2moeda")
let res = document.querySelector(".display-res")
let select = document.querySelector(".cambio-select")
let containerRes = document.querySelector('.container-res')



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


    // let vmicro = micro.value;

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
        let vv = input.value
        let total = vv * choose();
        return total;
    }

btn.addEventListener('click', ()=>{
    containerRes.innerHTML = `<h2 class="titulo-res">Resultado</h2>
         <p class="paragrafo-res">Sua conversão está pronta</p>
         <p class="paragrafo-res>Então não se preocupe, sua conversão está atrelada a cotação em tempo real</p>
       <span class="display-res">${calc()}</span>` 

    })
});



