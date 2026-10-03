let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioHora = Number(prompt("Digite o salário por hora:"));

let horasNormais = 160;
let salario;

if (horasTrabalhadas <= horasNormais) {
    salario = horasTrabalhadas * salarioHora;
} else {
    let horasExtras = horasTrabalhadas - horasNormais;
    let valorHoraExtra = salarioHora * 1.5;

    salario = (horasNormais * salarioHora) + (horasExtras * valorHoraExtra);
}

alert(`O salário total é R$ ${salario}`);
