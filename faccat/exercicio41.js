let nota1 = Number(prompt("Digite a nota da primeira verificação:"));
let nota2 = Number(prompt("Digite a nota da segunda verificação:"));
let nota3 = Number(prompt("Digite a nota da terceira verificação:"));
let mediaExercicios = Number(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento =
    (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

let conceito;

if (mediaAproveitamento >= 9) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6) {
    conceito = "C";
} else {
    conceito = "D";
}

alert(`Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}`);
alert(`Conceito: ${conceito}`);
