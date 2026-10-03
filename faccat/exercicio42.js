let codigo = prompt("Digite o código do empregado:");
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
let anoIngresso = Number(prompt("Digite o ano de ingresso na empresa:"));

let anoAtual = new Date().getFullYear(); // aqui no caso a gente usa esse Date pra não ter que mudar manualmente o numero do ano e tudo mais

let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

alert(`Idade: ${idade} anos`);
alert(`Tempo de trabalho: ${tempoTrabalho} anos`);

if (
    idade >= 65 ||
    tempoTrabalho >= 30 ||
    (idade >= 60 && tempoTrabalho >= 25)
) {
    alert("Requerer aposentadoria");
} else {
    alert("Não requerer");
}
