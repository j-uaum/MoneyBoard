
// botoes
let btn = document.getElementById('card1')
let btn2 = document.getElementById('card2')
let btn3 = document.getElementById('card3')
let btn4 = document.getElementById('card4')
let btn5 = document.getElementById('card5')
let btn6 = document.getElementById('card6')
let btn7 = document.getElementById('card7')
let dashs = document.querySelectorAll(".dash"); // cards
let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"  // a url da api
fetch(url) // use api
.then((res)=>{ // pegando o arquivo e transformando em json
    return res.json() // retornando o json
})
.then((data)=>{ // eu nao sei oq é mas parece que os then sao ligados só por serem then, enfim, esse then ja recebeu os dados

    const dolar = data.USDBRL // pegando valor dolar
    const euro = data.EURBRL
    
  
    //btn todas as moedas
btn.addEventListener('click', () => {

  dashs[0].innerHTML = 'hello world!';
  
  });
  
  
  
  
  
  
  // botão dolar
  btn2.addEventListener('click', () =>{
  
  
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    dashs[1].innerHTML = `<h3>Cotação Atual</h3> <p>Alta/atual: ${parseFloat(dolar.high).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p> <p>Baixa:${parseFloat(dolar.low).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
    // antigas cotações dashs[2].innerHTML = ''
    dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
    dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  });
  
  
  
  
  
  
  
  
  
  btn3.addEventListener('click', () =>{
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    //cotação atual dash[1].innerHTML = ''
   // antigas cotações dashs[2].innerHTML = ''
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  
  });
  btn4.addEventListener('click', () => {
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    //cotação atual dash[1].innerHTML = ''
   // antigas cotações dashs[2].innerHTML = ''
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  });
  btn5.addEventListener('click', () => {
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    //cotação atual dash[1].innerHTML = ''
   // antigas cotações dashs[2].innerHTML = ''
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  });
  btn6.addEventListener('click', () => {
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    //cotação atual dash[1].innerHTML = ''
   // antigas cotações dashs[2].innerHTML = ''
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  });
  btn7.addEventListener('click', () => {
  
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
    //cotação atual dash[1].innerHTML = ''
   // antigas cotações dashs[2].innerHTML = ''
   dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
     dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
     dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
     dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
  
  
  });
  
    
})



