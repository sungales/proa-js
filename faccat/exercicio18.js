let anoAtual = Number(prompt("Digite o ano atual:"));
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("A pessoa poderá votar este ano.");
} else {    ''
    alert("A pessoa não poderá votar este ano.");
}
