let btn = document.getElementById('card1')
let btn2 = document.getElementById('card2')
// let ds1 = document.querySelector(".dash1");
//let dashs = [document.querySelector(".dash1"),document.querySelector(".dash2"), document.querySelector(".dash2")];
let dashs = document.querySelectorAll(".dash");


btn.addEventListener('click', () => {


dashs[0].innerHTML = 'hello world!';


});

btn2.addEventListener('click', () =>{

   
    dashs[0].innerHTML = '<img class="usa-flag" src="united-states.png" alt="usa-flag"> <p>Estados Unidos Da América</p><p>América do Norte</p><p>Geralmente é a moeda referencia da economia global</p>';
   //cotação atual dash[1].innerHTML = ''
  // antigas cotações dashs[2].innerHTML = ''
  dashs[3].innerHTML = "<h2>Principais pontos da econômia</h2> <li>Serviços e empresas</li><li>Agropecuarios</li> <li>Industria</li> <li>Tecnologia</li> <li>Mineração</li> <li>Turismo</li> <li>Cinema e entretenimento</li> "
    dashs[6].innerHTML = "<h2>Dados do País</h2 <li>Presidente: Joe Biden</li><li>Capital: Washington D.C.</li> <li>População: 329,5 Milhões (2020)</li> <li>Cidades Notaveis: New York, San Francisco, Los Angeles, Chicago</li> <li>PIB: US$23 Trilhões (2021) * O melhor</li> <li>PIB per Capita: US$ 69.230,00 </li> <li>Inflação: 7% (Desembro de 2021)</li>"
    dashs[7].innerHTML = "<h2>Países que utilizam essa moeda</h2> <h3>Oficialmente:</h3> <li>Timor-Leste</li> <li>Equador</li><li>El Salvador</li><li>Panamá</li><li>Zimbabwe</li><li>Estados Federados da Micronésia</li> <h3>Não Oficial:</h3> <li>Porto Rico</li> <li>Samoa Americana</li> <li>Ilhas Virgens</li>"
    dashs[8].innerHTML = "<h2>Onde trocar seu BRL para US$:</h2>  <li>Bancos brasileiros como: Banco do Brasil, Caixa ou Bradesco *mais caro</li> <li>Wise *mais facil</li><li>Cartões Pré-Pagos *muita taxa</li><li>Câmbio via Argentina *Maior retorno</li><li>Remessa Online *mais seguro</li><li>Western Union *Melhor Opção</li>" 
});
