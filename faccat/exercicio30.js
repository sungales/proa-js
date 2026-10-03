let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
let valor3 = Number(prompt("Digite o terceiro valor:"));

if (valor1 < valor2 && valor2 < valor3) {
    alert(valor1, valor2, valor3);
} else if (valor1 < valor3 && valor3 < valor2) {
    alert(valor1, valor3, valor2);
} else if (valor2 < valor1 && valor1 < valor3) {
    alert(valor2, valor1, valor3);
} else if (valor2 < valor3 && valor3 < valor1) {
    alert(valor2, valor3, valor1);
} else if (valor3 < valor1 && valor1 < valor2) {
    alert(valor3, valor1, valor2);
} else {
    alert(valor3, valor2, valor1);
}
