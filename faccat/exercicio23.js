let nome = prompt("Digite o nome:");
let altura = Number(prompt("Digite a altura:"));
let sexo = prompt("Digite o sexo (M ou F):");

let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    console.log("Sexo inválido.");
}

alert(`Nome: ${nome}`);
alert(`Peso ideal: ${pesoIdeal} kg`);
