let numero = Number(prompt("Digite um número"))

let soma = 0
let counter = 1
let fatorial = 1

do {
    fatorial *= counter;
    soma += fatorial
    counter++
} while (counter <= numero)

alert(soma)
