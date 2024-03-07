const usd = document.getElementById('usd')
const eur = document.getElementById('eur')
const btc = document.getElementById('btc')

const cotacao = document.getElementById('cotacao')
const res = document.getElementById('res')

const url = 'https://economia.awesomeapi.com.br/json/last/'

usd.addEventListener('click', (e)=>{
    e.preventDefault()
    const convercao = async ()=>{
        const response = await fetch(`${url}USD-BRL`)
        const data = await response.json()
        cotacao.innerHTML = `
        <table>
        <tr>
           <th>Nome</th>
           <th>Compra</th>
           <th>Venda</th>
           <th>Variação Compra</th>
           <th>Maior</th>
           <th>Menor</th> 
        </tr>
        <tr>
            <td>${data.USDBRL.name}</td>
            <td>R$${data.USDBRL.bid}</td>
            <td>R$${data.USDBRL.ask}</td>
            <td>R$${data.USDBRL.varBid}</td>
            <td>R$${data.USDBRL.high}</td>
            <td>R$${data.USDBRL.low}</td>
        </tr>
        </table>
        `       
    }
    convercao()

})

eur.addEventListener('click', (e)=>{
    e.preventDefault()
    const convercao = async ()=>{
        const response = await fetch(`${url}EUR-BRL`)
        const data = await response.json()
        cotacao.innerHTML = `
        <table>
        <tr>
           <th>Nome</th>
           <th>Compra</th>
           <th>Venda</th>
           <th>Variação Compra</th>
           <th>Maior</th>
           <th>Menor</th> 
        </tr>
        <tr>
            <td>${data.EURBRL.name}</td>
            <td>R$${data.EURBRL.bid}</td>
            <td>R$${data.EURBRL.ask}</td>
            <td>R$${data.EURBRL.varBid}</td>
            <td>R$${data.EURBRL.high}</td>
            <td>R$${data.EURBRL.low}</td>
        </tr>
        </table>
        `       
    }
    convercao()

})

btc.addEventListener('click', (e)=>{
    e.preventDefault()
    const convercao = async ()=>{
        const response = await fetch(`${url}BTC-BRL`)
        const data = await response.json()
        cotacao.innerHTML = `
        <table>
        <tr>
           <th>Nome</th>
           <th>Compra</th>
           <th>Venda</th>
           <th>Variação Compra</th>
           <th>Maior</th>
           <th>Menor</th> 
        </tr>
        <tr>
            <td>${data.BTCBRL.name}</td>
            <td>R$${data.BTCBRL.bid}</td>
            <td>R$${data.BTCBRL.ask}</td>
            <td>R$${data.BTCBRL.varBid}</td>
            <td>R$${data.BTCBRL.high}</td>
            <td>R$${data.BTCBRL.low}</td>
        </tr>
        </table>
        `       
    }
    convercao()

})