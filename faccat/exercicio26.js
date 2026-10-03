let quantidadeAtual = Number(prompt("Digite a quantidade atual em estoque:"));
let quantidadeMaxima = Number(prompt("Digite a quantidade máxima em estoque:"));
let quantidadeMinima = Number(prompt("Digite a quantidade mínima em estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

alert(`Quantidade média: ${quantidadeMedia}`);

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}
