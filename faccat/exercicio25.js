let numeroConta = prompt("Digite o número da conta:");
let saldo = Number(prompt("Digite o saldo:"));
let debito = Number(prompt("Digite o débito:"));
let credito = Number(prompt("Digite o crédito:"));

let saldoAtual = saldo - debito + credito;

alert(`conta: ${numeroConta}`);
alert(`saldo atual: R$ ${saldoAtual}`);

if (saldoAtual >= 0) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}
