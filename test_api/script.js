let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"  // a url da api
fetch(url) // use api
.then((res)=>{ // pegando o arquivo e transformando em json
    return res.json() // retornando o json
})
.then((data)=>{ // eu nao sei oq é mas parece que os then sao ligados só por serem then, enfim, esse then ja recebeu os dados

    const dolar = data.USDBRL // pegando valor dolar
    console.log(dolar.high) // imprimindo a alta do dolar
})