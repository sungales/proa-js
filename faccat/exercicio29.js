let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
let valor3 = Number(prompt("Digite o terceiro valor:"));

let soma;

if (valor1 < valor2 && valor1 < valor3) {
    soma = valor2 + valor3;
} else if (valor2 < valor1 && valor2 < valor3) {
    soma = valor1 + valor3;
} else {
    soma = valor1 + valor2;
}

alert(`A soma dos dois maiores valores é ${soma}`);
