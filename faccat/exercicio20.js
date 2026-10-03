let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
    alert(`Ordem crescente: ${valor1}, ${valor2}`);
} else {
    alert(`Ordem crescente: ${valor2}, ${valor1}`);
}
