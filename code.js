let btn2 = document.getElementById('card2')
let btn3 = document.getElementById('card3')
let btn4 = document.getElementById('card4')
let btn5 = document.getElementById('card5')
let btn6 = document.getElementById('card6')
let btn7 = document.getElementById('card7')
let dashs = document.querySelectorAll(".dash"); // cards
let inp = document.querySelector(".ex-input")
let btn = document.querySelector(".btn-hidden");
let res = document.querySelector(".ex-res");
let body = document.querySelector("#body");
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
  btn2.addEventListener('click', () =>{
  //dolar
  fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
    dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/united-states.png" alt="usa-flag">
     <p class="titulo-bandeira">Estados Unidos Da América</p>
     <br><br>
     <p class="continente">América do Norte</p>`;
                dashs[1].innerHTML = `<h3>Cotação Atual</h3>
                <br>
                <p class="alta"> ${parseFloat(dolar.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
                <br> 
                <h1 class="baixa"> ${parseFloat(dolar.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br><br>
                <p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br> 
    <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> 
    <br> 
    <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
                  dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
                  <br><br> 
                  <li class='item-lista'>Serviços e empresas</li>
                  <br>
                  <li class='item-lista'>Agropecuarios</li>
                  <br>
                  <li class='item-lista'>Industria</li>
                  <br>
                  <li class='item-lista'>Tecnologia</li>
                  <br>
                  <li class='item-lista'>Mineração</li>
                  <br> 
                  <li class='item-lista'>Turismo</li>
                  <br> 
                  <li class='item-lista'>Cinema e entretenimento</li> `
    dashs[5].innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3dQm0HUjmX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2>
    <br><br> 
    <li class='item-lista'>Presidente: Joe Biden</li>
    <br>
    <li class='item-lista'>Capital: Washington D.C.</li>
    <br>
    <li class='item-lista'>População: 329,5 Milhões (2020)</li>
    <br> 
    <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li>
    <br>
    <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li>
    <br>
    <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li>
    <br>
    <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>`
                  dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
                  <br><br>
                  <h3 class='item-lista'>Oficialmente:</h3>
                    <br>
                    <li class='item-lista'>Timor-Leste</li> 
                    <br>
                    <li class='item-lista'>Equador</li>
                    <br>
                    <li class='item-lista'>El Salvador</li>
                    <br>
                    <li class='item-lista'>Panamá</li>
                    <br>
                    <li class='item-lista'>Zimbabwe</li>
                    <br>
                    <li class='item-lista'>Estados Federados da Micronésia</li>
                    <br><br>
                    <h3 class='item-lista'>Não Oficial:</h3>
                    <br> 
                    <li class='item-lista'>Porto Rico</li>
                    <br>
                    <li class='item-lista'>Samoa Americana</li>
                    <br>
                    <li class='item-lista'>Ilhas Virgens</li>`

    dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
    <br>
    <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
    <br>
    <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>`
    });
  });
  btn3.addEventListener('click', () =>{
//euro
    fetch("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
      dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/europe-flag.png" alt="usa-flag">
                <p class="titulo-bandeira">União Europeia</p>
                <br><br>
                <p class="continente">Europa</p>`;
                dashs[1].innerHTML = `<h3>Cotação Atual</h3>
                          <br> 
                          <p class="alta"> ${parseFloat(euro.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
                          <br> 
                          <h1 class="baixa"> ${parseFloat(euro.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                          <br><br>
                          <p>Cotação em tempo real</p>`
      dashs[2].innerHTML = `<h3>Cotações Antigas</h3>
                <br>
                <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br>
                <h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br>
                <h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br>
                <h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br>
                <h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br> 
                <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
                <br> 
                <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
                    dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
                              <br><br> 
                              <li class='item-lista'>Serviços e comércios</li>
                              <br>
                              <li class='item-lista'>Agropecuários</li>
                              <br>
                              <li class='item-lista'>Industria</li>
                              <br> 
                              <li class='item-lista'>Commodities</li>
                              <br> 
                              <li class='item-lista'>Mineração</li>
                              <br> 
                              <li class='item-lista'>Turismo</li>
                              <br> 
                              <li class='item-lista'>Produtos de alta tecnologia</li>`
      dashs[5].innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/a4QtVQazVmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                    dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2> 
                              <br><br> 
                              <li class='item-lista'>Liderança: Roberta Metsola</li>
                              <br>
                              <li class='item-lista'>Capital: Bruxelas, Bélgica</li>
                              <br>
                              <li class='item-lista'>População: 746,4 Milhões (2018)</li> 
                              <br>
                              <li class='item-lista'>Cidades Notaveis: Roma, Londres, Paris, Berlim, Bruxelas, Amsterdam, Lisboa, Madrid</li>
                              <br>
                              <li class='item-lista'>PIB: US$15,3 Trilhões (2021) * O maior</li>
                              <br>
                              <li class='item-lista'>PIB per Capita: US$ 32.506,00 </li> 
                              <br>
                              <li class='item-lista'>Inflação: Média de 4,7% (Dezembro de 2021)</li>`
      dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
                <br><br>
                <li class='item-lista'>Alemanha</li>
                <br>
                <li class='item-lista'>França</li>
                <br>
                <li class='item-lista'>Italia</li>
                <br>
                <li class='item-lista'>Portugal</li>
                <br>
                <li class='item-lista'>Países Baixos</li>
                <br>
                <li class='item-lista'>Espanha</li>
                <br>
                <li class='item-lista'>Irlanda</li>
                <br>
                <li class='item-lista'>Dinamarca</li>
                <br>
                <li class='item-lista'>Suecia</li>
                <br>
                <li class='item-lista'>Mais outros 10 países</li>
                `

                  dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
                            <br>
                            <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
                            <br>
                            <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>` 
    })
  });
  btn4.addEventListener('click', () => {
  //real
  dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/brazil.png" alt="usa-flag">
   <p class="titulo-bandeira">República Federativa do Brasil</p>
   <br><br>
   <p class="continente">América do Sul</p>`;
  dashs[1].innerHTML = `<h3>Essa é a moeda referência desse site</h3>`
  dashs[2].innerHTML = `<h3>Real Brasileiro (BRL)</h3>` 
  dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
  <br><br>
   <li class='item-lista'>Commodities</li>
   <br>
   <li class='item-lista'>Agropecuarios</li>
    <br>
    <li class='item-lista'>Industria</li>
    <br> 
    <li class='item-lista'>Tecnologia</li>
    <br> 
    <li class='item-lista'>Mineração</li>
    <br> 
    <li class='item-lista'>Turismo</li>
    <br>`
  dashs[5].innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7BJ1YQWwogE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2>
  <br><br>
   <li class='item-lista'>Presidente: Jair Bolsonaro</li>
   <br>
   <li class='item-lista'>Capital: Brasilia</li> 
   <br>
   <li class='item-lista'>População: 214 Milhões (2020)</li>
   <br>
   <li class='item-lista'>Cidades Notaveis: São Paulo, Rio de Janeiro, Porto Alegre, Curitiba, Balneário Camburiu</li>
   <br> 
   <li class='item-lista'>PIB: US$1,609 Trilhão (2021) </li>
   <br> 
   <li class='item-lista'>PIB per Capita: US$ 15.550,00 (2021) </li>
   <br> 
   <li class='item-lista'>Inflação: 7,2% (2022)</li>`
  dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
  <br><br> 
  <li class='item-lista'>Brazil</li>`
  dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
    <br>
    <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
    <br>
    <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>`
  });
  btn5.addEventListener('click', () => {
  //libra
  fetch("https://economia.awesomeapi.com.br/json/daily/GBP-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
    dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/reino-unido.png" alt="usa-flag"> 
    <p class="titulo-bandeira">Reino Unido</p>
    <br><br>
    <p class="continente">Norte da europa</p>`;
    dashs[1].innerHTML = `<h3>Cotação Atual</h3>
    <br> 
    <p class="alta"> ${parseFloat(libra.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
    <br> 
    <h1 class="baixa"> ${parseFloat(libra.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br><br>
    <p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3>
    <br> 
    <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br> 
     <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
      <br> 
      <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
    <br><br>
     <li class='item-lista'>Serviços financeiros</li>
     <br>
     <li class='item-lista'>Agropecuarios e pesca</li>
     <br>
     <li class='item-lista'>Industria</li>
     <br> 
     <li class='item-lista'>Tecnologia</li>
     <br> 
     <li class='item-lista'>Turismo</li>
     <br>
       `
    dashs[5].innerHTML - `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6_H_wXWnF1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2>
    <br><br>
     <li class='item-lista'>Primeiro-Ministro: Rishi Sunak</li>
     <br>
     <li class='item-lista'>Capital: Londres </li>
     <br> 
     <li class='item-lista'>População: 67,33 Milhões (2021)</li>
     <br> 
     <li class='item-lista'>Cidades Notaveis: Edimburgo, Glasgow, Cardiff, Belfast, Brighton</li>
      <br>
      <li class='item-lista'>PIB: US$3,187 Trilhões (2021)</li>
      <br>
       <li class='item-lista'>PIB per Capita: US$ 47.334,36 </li>
       <br>
        <li class='item-lista'>Inflação: 10,1% (2022)</li>`
    dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
    <br><br> 
    <li class='item-lista'>Inglaterra</li>
    <br>
    <li class='item-lista'>Escócia</li>
    <br>
    <li class='item-lista'>Irlanda do Norte</li>
    <br>
    <li class='item-lista'>País de Gales</li>
    <br>
    <li class='item-lista'>Bermudas</li>
    <br>
    <li class='item-lista'>Ilhas Cayman</li>
    <br>
    <li class='item-lista'>Falklands</li>
    <br>
    <li class='item-lista'>Ilhas Virgens Britânicas</li>
    <br>
    <li class='item-lista'>Gibraltar</li>`
    dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
    <br>
    <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
    <br>
    <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>`
    })
  });
  btn6.addEventListener('click', () => {
  //rublo
  fetch("https://economia.awesomeapi.com.br/json/daily/RUB-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
    dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/russia.png" alt="usa-flag">
     <p class="titulo-bandeira">Federação Russa</p>
     <br><br>
     <p class="continente">Europa Oriental</p>`;
    dashs[1].innerHTML = `<h3>Cotação Atual</h3>
    <br> 
    <p class="alta"> ${parseFloat(rublo.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
    <br> 
    <h1 class="baixa"> ${parseFloat(rublo.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br><br>
    <p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3>
    <br> 
    <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br> 
     <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> 
     <br> 
     <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
    <br><br>
     <li class='item-lista'>Serviços e empresas</li>
     <br>
     <li class='item-lista'>Agropecuários</li>
      <br>
      <li class='item-lista'>Industria</li>
       <br>
        <li class='item-lista'>Mineração e refinárias</li>
        <br>
         <li class='item-lista'>Turismo</li>
         <br> 
         <li class='item-lista'>Setor de energia</li> `
    dashs[5].innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z0pYFEkxvu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2>
    <br><br> 
    <li class='item-lista'>Presidente: Vladmir Putin</li>
    <br>
    <li class='item-lista'>Capital: Moscow</li>
    <br> 
    <li class='item-lista'>População: 143,4 Milhões (2021)</li>
    <br> 
    <li class='item-lista'>Cidades Notaveis: São Petersburgo, Cazã, Novgorod, Sochi, Samara</li>
    <br>
     <li class='item-lista'>PIB: US$ 1,776 Trilhão (2021) </li>
     <br>
      <li class='item-lista'>PIB per Capita: US$ 12.172.79 </li>
      <br>
       <li class='item-lista'>Inflação: 13.7% (2022)</li>`
    dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
    <br><br>
     <li class='item-lista'>Russia</li>
     <br>
     <li class='item-lista'>Bielorrússia</li>`
     dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
     <br>
     <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
     <br>
     <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>` 
    })
  });
  btn7.addEventListener('click', () => {
  //won
  fetch("https://economia.awesomeapi.com.br/json/daily/KRW-USD/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
    dashs[0].innerHTML = `<img class="usa-flag" src="./Assets/png/coreia-do-sul.png" alt="usa-flag">
     <p class="titulo-bandeira">República da Coreia</p>
     <br><br>
     <p class="continente">Ásia Orienteal</p>`;
        dashs[1].innerHTML = `<h3>Cotação Atual</h3>
        <br>
        <p class="alta"> ${parseFloat(won.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
        <br> 
        <h1 class="baixa"> ${parseFloat(won.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
        <br><br>
        <p>Cotação em tempo real</p>
        <br>
        <p><b>1 BRL >> 252,625 KRW</b></p>
        <br>
        <p><b>1 USD >> 1.319,71 KRW</b></p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3>
    <br> 
    <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>
    <h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
    <br>  
    <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>
     <br> 
     <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = `<h2 class='titulo-pontos'>Principais pontos da econômia</h2>
    <br><br>
     <li class='item-lista'>Serviços e empresas</li>
     <br>
     <li class='item-lista'>Agropecuarios</li> 
     <br>
     <li class='item-lista'>Industria</li>
     <br> 
     <li class='item-lista'>Alta Tecnologia</li>
     <br>
      <li class='item-lista'>Mineração</li>
      <br> 
      <li class='item-lista'>Turismo</li>
      <br>
       <li class='item-lista'>Cinema e entretenimento</li> `
    dashs[5].innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RHh61HPzyj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`
    dashs[6].innerHTML = `<h2 class='titulo-pontos'>Dados do País</h2>
    <br><br>
     <li class='item-lista'>Presidente: Yoon Suk-Yeol</li>
     <br>
     <li class='item-lista'>Capital: Seul</li>
     <br>
      <li class='item-lista'>População: 51,74 Milhões (2021)</li>
      <br>
       <li class='item-lista'>Cidades Notaveis: Busan, Jeju, Daejeon, Pusan, Incheon</li>
        <br>
        <li class='item-lista'>PIB: US$ 1.799 Trilhão (2021)</li>
        <br> 
        <li class='item-lista'>PIB per Capita: US$ 34.757,72 (2021) </li>
        <br> 
        <li class='item-lista'>Inflação: 6% (2022)</li>`
    dashs[7].innerHTML = `<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2>
    <br><br>
    <li class='item-lista'>República da Coreia</li>
    <br>
    <li class='item-lista'>República Popular Democrática da Coreia</li>`
    dashs[8].innerHTML = `<h2>Faça sua conversão aqui</h2>
    <br>
    <img src="/Assets/svg/chevron_duo_down.svg" alt="..." class="convert-svg">
    <br>
    <a href="/convert/conversor.html" class="href-convert"><button class="btn-convert">Acesse o conversor de moedas</button></a>` 
  })
  });
})
 


