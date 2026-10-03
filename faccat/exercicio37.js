let quantidadeMorango = Number(prompt("Digite a quantidade de morangos em Kg:"));
let quantidadeMaca = Number(prompt("Digite a quantidade de maçãs em Kg:"));

let precoMorango;
let precoMaca;

if (quantidadeMorango <= 5) {
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}

if (quantidadeMaca <= 5) {
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}

let valorMorango = quantidadeMorango * precoMorango;
let valorMaca = quantidadeMaca * precoMaca;

let quantidadeTotal = quantidadeMorango + quantidadeMaca;
let valorTotal = valorMorango + valorMaca;

if (quantidadeTotal > 8 || valorTotal > 25) {
    valorTotal = valorTotal * 0.90;
}

alert(`Valor a pagar: R$ ${valorTotal.toFixed(2)}`);
