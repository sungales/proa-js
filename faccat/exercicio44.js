let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2;

do {
    valor2 = Number(prompt("Digite o segundo valor (diferente de zero):"));
} while (valor2 === 0);

let resultado = valor1 / valor2;

alert(`Resultado da divisão: ${resultado}`);
