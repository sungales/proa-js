let counter = 1;
let soma = 0;
let total = 0;
let numero;

do {
    numero = Number(prompt(`Escreva ${counter} número`));

    if (numero > 0) {
        soma += numero;
        total++;

        alert(`Soma dos números já informados: ${soma}`);
    }

    counter++;

} while (numero > 0);

if (total > 0) {
    let media = soma / total;

    console.log(`Somatório: ${soma}`);
    console.log(`Média: ${media}`);
    console.log(`Total de valores lidos: ${total}`);
} else {
    console.log("Nenhum valor positivo foi informado.");
}