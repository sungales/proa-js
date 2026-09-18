let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"))
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"))

let diferenca;

if (numero1 > numero2) {
  diferenca = numero1 - numero2
} else {
  diferenca = numero2 - numero1
}

alert("A diferença do maior pelo menor é: " + diferenca)