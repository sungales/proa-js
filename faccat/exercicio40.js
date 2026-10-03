let nomeProduto = prompt("Digite o nome do produto:");
let quantidade = Number(prompt("Digite a quantidade adquirida:"));
let precoUnitario = Number(prompt("Digite o preço unitário:"));

let total = quantidade * precoUnitario;
let percentualDesconto;

if (quantidade <= 5) {
    percentualDesconto = 0.02;
} else if (quantidade <= 10) {
    percentualDesconto = 0.03;
} else {
    percentualDesconto = 0.05;
}

let desconto = total * percentualDesconto;
let totalPagar = total - desconto;

alert(`Produto: ${nomeProduto}`);
alert(`Total: R$ ${total}`);
alert(`Desconto: R$ ${desconto}`);
alert(`Total a pagar: R$ ${totalPagar}`);
