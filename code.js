
// botoes
let btn = document.getElementById('card1')
let btn2 = document.getElementById('card2')
let btn3 = document.getElementById('card3')
let btn4 = document.getElementById('card4')
let btn5 = document.getElementById('card5')
let btn6 = document.getElementById('card6')
let btn7 = document.getElementById('card7')
let dashs = document.querySelectorAll(".dash"); // cards

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
  
    //btn todas as moedas
btn.addEventListener('click', () => {

  dashs[0].innerHTML = 'hello world!';
  
  });
  
  
  
  
  
  
  // botão dolar
  btn2.addEventListener('click', () =>{
  //dolar
  fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p class="titulo-bandeira">Estados Unidos Da América</p><br><br><p class="continente">América do Norte</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p class="alta"> ${parseFloat(dolar.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 class="baixa"> ${parseFloat(dolar.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><br><p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3><br> <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br>  <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> <br> <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2> <li class='item-lista'>Presidente: Joe Biden</li><li class='item-lista'>Capital: Washington D.C.</li> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2> <h3 class='item-lista'>Oficialmente:</h3> <li class='item-lista'>Timor-Leste</li> <li class='item-lista'>Equador</li><li class='item-lista'>El Salvador</li><li class='item-lista'>Panamá</li><li class='item-lista'>Zimbabwe</li><li class='item-lista'>Estados Federados da Micronésia</li> <h3 class='item-lista'>Não Oficial:</h3> <li class='item-lista'>Porto Rico</li> <li class='item-lista'>Samoa Americana</li> <li class='item-lista'>Ilhas Virgens</li>"
    dashs[8].innerHTML = `nova feature conversão de cambio` 
    })
    //ver os borders diferentes
  });
  
  btn3.addEventListener('click', () =>{
//euro
    fetch("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 

      dashs[0].innerHTML = '<img class="usa-flag" src="europe-flag.png" alt="usa-flag"> <p class="titulo-bandeira">União Europeia</p><br><br><p class="continente">Europa</p>';
      dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p class="alta"> ${parseFloat(euro.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 class="baixa"> ${parseFloat(euro.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><br><p>Cotação em tempo real</p>`
      dashs[2].innerHTML = `<h3>Cotações Antigas</h3><br> <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br>  <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> <br> <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
      dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
      dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2><br><br> <li class='item-lista'>Presidente: Joe Biden</li><br><li class='item-lista'>Capital: Washington D.C.</li><br> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <br><li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li><br> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li><br> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <br><li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
      dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2><br><br> <h3 class='item-lista'>Oficialmente:</h3><br> <li class='item-lista'>Timor-Leste</li><br> <li class='item-lista'>Equador</li><br><li class='item-lista'>El Salvador</li><br><li class='item-lista'>Panamá</li><br><li class='item-lista'>Zimbabwe</li><br><li class='item-lista'>Estados Federados da Micronésia</li> <br><h3 class='item-lista'>Não Oficial:</h3><br> <li class='item-lista'>Porto Rico</li><br> <li class='item-lista'>Samoa Americana</li> <br><li class='item-lista'>Ilhas Virgens</li>"
      dashs[8].innerHTML = `nova feature conversão de cambio` 
  
    })
  
  });
  btn4.addEventListener('click', () => {
  //real
  dashs[0].innerHTML = '<img class="usa-flag" src="brazil.png" alt="usa-flag"> <p class="titulo-bandeira">República Federativa do Brasil</p><br><br><p class="continente">América do Sul</p>';
  dashs[1].innerHTML = `<h3>Essa é a moeda referência desse site</h3>`
  dashs[2].innerHTML = `<h3>Real Brasileiro (BRL)</h3>` 
  dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
  dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2> <li class='item-lista'>Presidente: Joe Biden</li><li class='item-lista'>Capital: Washington D.C.</li> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
  dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2> <h3 class='item-lista'>Oficialmente:</h3> <li class='item-lista'>Timor-Leste</li> <li class='item-lista'>Equador</li><li class='item-lista'>El Salvador</li><li class='item-lista'>Panamá</li><li class='item-lista'>Zimbabwe</li><li class='item-lista'>Estados Federados da Micronésia</li> <h3 class='item-lista'>Não Oficial:</h3> <li class='item-lista'>Porto Rico</li> <li class='item-lista'>Samoa Americana</li> <li class='item-lista'>Ilhas Virgens</li>"
  dashs[8].innerHTML = `nova feature conversão de cambio` 
  
  
  });
  btn5.addEventListener('click', () => {
  //libra

  fetch("https://economia.awesomeapi.com.br/json/daily/GBP-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 

    dashs[0].innerHTML = '<img class="usa-flag" src="reino-unido.png" alt="usa-flag"> <p class="titulo-bandeira">Reino Unido</p><br><br><p class="continente">Norte da europa</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p class="alta"> ${parseFloat(libra.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 class="baixa"> ${parseFloat(libra.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><br><p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3><br> <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br>  <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> <br> <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2> <li class='item-lista'>Presidente: Joe Biden</li><li class='item-lista'>Capital: Washington D.C.</li> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2> <h3 class='item-lista'>Oficialmente:</h3> <li class='item-lista'>Timor-Leste</li> <li class='item-lista'>Equador</li><li class='item-lista'>El Salvador</li><li class='item-lista'>Panamá</li><li class='item-lista'>Zimbabwe</li><li class='item-lista'>Estados Federados da Micronésia</li> <h3 class='item-lista'>Não Oficial:</h3> <li class='item-lista'>Porto Rico</li> <li class='item-lista'>Samoa Americana</li> <li class='item-lista'>Ilhas Virgens</li>"
    dashs[8].innerHTML = `nova feature conversão de cambio` 
    
    })
  
  });
  btn6.addEventListener('click', () => {
  //rublo

  fetch("https://economia.awesomeapi.com.br/json/daily/RUB-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 


    dashs[0].innerHTML = '<img class="usa-flag" src="russia.png" alt="usa-flag"> <p class="titulo-bandeira">Federação Russa</p><br><br><p class="continente">Europa Oriental</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p class="alta"> ${parseFloat(rublo.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 class="baixa"> ${parseFloat(rublo.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><br><p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3><br> <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br>  <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> <br> <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2> <li class='item-lista'>Presidente: Joe Biden</li><li class='item-lista'>Capital: Washington D.C.</li> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2> <h3 class='item-lista'>Oficialmente:</h3> <li class='item-lista'>Timor-Leste</li> <li class='item-lista'>Equador</li><li class='item-lista'>El Salvador</li><li class='item-lista'>Panamá</li><li class='item-lista'>Zimbabwe</li><li class='item-lista'>Estados Federados da Micronésia</li> <h3 class='item-lista'>Não Oficial:</h3> <li class='item-lista'>Porto Rico</li> <li class='item-lista'>Samoa Americana</li> <li class='item-lista'>Ilhas Virgens</li>"
    dashs[8].innerHTML = `nova feature conversão de cambio` 
    })
  
  });
  btn7.addEventListener('click', () => {
  //won

  fetch("https://economia.awesomeapi.com.br/json/daily/KRW-USD/15").then((res2)=>{return res2.json()}).then((data2)=>{ 


    dashs[0].innerHTML = '<img class="usa-flag" src="coreia-do-sul.png" alt="usa-flag"> <p class="titulo-bandeira">República da Coreia</p><br><br><p class="continente">Ásia Orienteal</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p class="alta"> ${parseFloat(won.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 class="baixa"> ${parseFloat(won.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><br><p>Cotação em tempo real</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3><br> <h1 class="anti-coti"> ${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti"> ${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br><h1 class="anti-coti">  ${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1><br>  <h1 class="anti-coti">  ${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1> <br> <h1 class="anti-coti">  ${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>` 
    dashs[3].innerHTML = "<h2 class='titulo-pontos'>Principais pontos da econômia</h2><br><br> <li class='item-lista'>Serviços e empresas</li><br><li class='item-lista'>Agropecuarios</li> <br><li class='item-lista'>Industria</li><br> <li class='item-lista'>Tecnologia</li><br> <li class='item-lista'>Mineração</li><br> <li class='item-lista'>Turismo</li><br> <li class='item-lista'>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2 class='titulo-pontos'>Dados do País</h2> <li class='item-lista'>Presidente: Joe Biden</li><li class='item-lista'>Capital: Washington D.C.</li> <li class='item-lista'>População: 329,5 Milhões (2020)</li> <li class='item-lista'>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li class='item-lista'>PIB: US$23 Trilhões (2021) * O melhor</li> <li class='item-lista'>PIB per Capita: US$ 69.230,00 </li> <li class='item-lista'>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2 class='titulo-pontos'>Países que utilizam essa moeda</h2> <h3 class='item-lista'>Oficialmente:</h3> <li class='item-lista'>Timor-Leste</li> <li class='item-lista'>Equador</li><li class='item-lista'>El Salvador</li><li class='item-lista'>Panamá</li><li class='item-lista'>Zimbabwe</li><li class='item-lista'>Estados Federados da Micronésia</li> <h3 class='item-lista'>Não Oficial:</h3> <li class='item-lista'>Porto Rico</li> <li class='item-lista'>Samoa Americana</li> <li class='item-lista'>Ilhas Virgens</li>"
    dashs[8].innerHTML = `nova feature conversão de cambio` 
  
  })
  });

  
})



