
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
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3><br> <p id="alta"> ${parseFloat(dolar.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><br> <h1 id="baixa"> ${parseFloat(dolar.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h1>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3> <p>Ontem:${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>Anteontem:${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 3 dias:${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 4 dias:${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 5 dias:${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 6 dias:${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 7 dias:${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>` 
    dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
    dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
    })
  });
  
  btn3.addEventListener('click', () =>{
//euro
    fetch("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 

    dashs[0].innerHTML = '<img class="usa-flag" src="./european-union.png" alt="euro-flag"> <p>União Europeia</p><p>Zona do euro</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3> <p>Alta/atual: ${parseFloat(euro.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p> <p>Baixa:${parseFloat(euro.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3> <p>Ontem:${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>Anteontem:${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 3 dias:${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 4 dias:${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 5 dias:${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 6 dias:${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 7 dias:${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>` 
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2><li>Turismo</li> <li>Serviços e empresas</li><li>Industria</li><li>Esporte e Entretenimento</li> <li>Tecnologia</li> <li>Mineração</li>  "
     dashs[6].innerHTML = "<h2>Dados do Bloco</h2 <li>Liderança: Parlamento da UE</li><li>Capital:Bruxelas, Bélgica</li> <li>População: 447,7 Milhões (2020)</li> <li>Cidades Notaveis: Berlim, Paris, Roma, Amsterdam, Bruxelas, Lisboa</li> <li>PIB: US$17,8 Trilhões (2020)</li> <li>PIB per Capita: US$ 41.100,00 </li> <li>Inflação: 1,5% (Desembro de 2017)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Áustria</li> <li>Bélgica</li><li>Chipre</li><li>Estónia</li><li>Finlândia</li><li>França</li> <li>Alemanha</li> <li>Grécia</li> <li>Irlanda</li><li>Itália</li><li>Letônia</li><li>Lituânia</li><li>Luxemburgo</li><li>Malta</li><li>Países Baixos</li><li>Portugal</li><li>Espanha</li><li>Eslôvenia</li><li>Eslôvaquia</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
    })
  
  });
  btn4.addEventListener('click', () => {
  //real
    dashs[0].innerHTML = '<img class="usa-flag" src="brazil.png" alt="real-flag"> <p>República Federativa do Brasil</p><p>América do Sul</p><p>Participante do BRICS e segunda economia mais forte da america</p>';
     dashs[1].innerHTML = '<h3>Essa moeda é a refêrencia deste site</h3><h4>Antigas moedas</h4> <li>Cruzeiro</li><li>Cruzados</li> <li>Cruzado Real</li><li>Cruzado Novo</li>'
    dashs[2].innerHTML = 'O valor base da moeda a ser considerado é de: 1 Real Brasileiro (BRL)'
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Agropecuários</li> <li>Industria</li> <li>Mineração</li> <li>Turismo</li> <li>Industria petrolifêra</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Jair Bolsonaro</li><li>Capital: Brasília</li> <li>População: 213.6 Milhões (2020)</li> <li>Cidades Notaveis: Brasília, São Paulo, Salvador, Balneário Camburiu, Curitiba, Porto Alegre</li> <li>PIB: US$1,445 Trilhão (2021)</li> <li>PIB per Capita: US$ 35.162,70 </li> <li>Inflação: 5,73% (Outubro de 2022)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <p>Brasil</p>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  });
  btn5.addEventListener('click', () => {
  //libra

  fetch("https://economia.awesomeapi.com.br/json/daily/GBP-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 


    dashs[0].innerHTML = '<img class="usa-flag" src="reino-unido.png" alt="uk-flag"> <p>Reino Unido</p><p>Norte da Europa</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3> <p>Alta/atual: ${parseFloat(libra.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p> <p>Baixa:${parseFloat(libra.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3> <p>Ontem:${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>Anteontem:${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 3 dias:${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 4 dias:${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 5 dias:${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 6 dias:${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 7 dias:${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>` 
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
    })
  
  });
  btn6.addEventListener('click', () => {
  //rublo

  fetch("https://economia.awesomeapi.com.br/json/daily/RUB-BRL/15").then((res2)=>{return res2.json()}).then((data2)=>{ 


    dashs[0].innerHTML = '<img class="usa-flag" src="russia.png" alt="russia-flag"> <p>Federeção da Rússia</p><p>Leste Europeu</p><p>Atualmente Sancionada por começar uma guerra</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3> <p>Alta/atual: ${parseFloat(rublo.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p> <p>Baixa:${parseFloat(rublo.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3> <p>Ontem:${parseFloat(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>Anteontem:${parseFloat(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 3 dias:${parseFloat(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 4 dias:${parseFloat(data2[4].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 5 dias:${parseFloat(data2[5].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 6 dias:${parseFloat(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 7 dias:${parseFloat(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>` 
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
    })
  
  });
  btn7.addEventListener('click', () => {
  //won

  fetch("https://economia.awesomeapi.com.br/json/daily/KRW-USD/15").then((res2)=>{return res2.json()}).then((data2)=>{ 


    dashs[0].innerHTML = '<img class="usa-flag" src="coreia-do-sul.png" alt="korea-flag"> <p>Coreia do Sul</p><p>Ásia Central</p><p>Geralmente é a moeda referencia da economia ásiatica</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3> <p>Alta/atual: ${(won.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p> <p>Baixa: ${(won.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
    dashs[2].innerHTML = `<h3>Cotações Antigas</h3> <p>Ontem: ${(data2[1].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>Anteontem: ${(data2[2].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 3 dias: ${(data2[3].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 4 dias: ${data2[4].high.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p><p>à 5 dias: ${data2[5].high.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 6 dias: ${(data2[6].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>  <p>à 7 dias: ${(data2[7].high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>` 
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  })
  });

  
})



