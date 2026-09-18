let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar (em reais):"));
let quantidadeReais = parseFloat(prompt("Digite a quantidade de reais que você possui:"));

let valorEmDolares = quantidadeReais / cotacaoDolar;

alert("O valor em dólares é: US$ " + valorEmDolares);