let numero = Number(prompt("Digite um número"))
let maior = 0
let menor = 0

if (numero >= 0) {
    maior = numero
    menor = numero

    do {
        numero = Number(prompt("Digite outro número"))

        if (numero >= 0) {
            if (numero > maior) {
                maior = numero
            }

            if (numero < menor) {
                menor = numero
            }
        }
    } while (numero > 0)

    console.log("Maior valor: ", maior)
    console.log("Menor valor: ", menor)
} else {
    console.log("Nenhum número positivo")
}