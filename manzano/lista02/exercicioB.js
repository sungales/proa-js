let numero = parseInt(prompt("Digite um número inteiro (positivo ou negativo):"))

if (numero < 0) {
  numero = numero * -1;
}

alert("O módulo do número é: " + numero)