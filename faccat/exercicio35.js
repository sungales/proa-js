let litros = Number(prompt("Digite a quantidade de litros:"));
let combustivel = prompt("Digite o tipo de combustível (A ou G):");

let preco;
let desconto;

if (combustivel.toUpperCase() === "A") {
    preco = 2.90;

    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }

} else if (combustivel.toUpperCase() === "G") {
    preco = 3.30;

    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }

} else {
    alert("Combustível inválido.");
}

let valorTotal = litros * preco;
let valorDesconto = valorTotal * desconto;
let valorPagar = valorTotal - valorDesconto;

alert(`Valor a pagar: R$ ${valorPagar}`);
