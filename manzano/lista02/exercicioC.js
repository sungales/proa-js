let numero1 = parseInt(prompt("Digite a primeira nota:"))
let numero2 = parseInt(prompt("Digite a segunda nota:"))
let numero3 = parseInt(prompt("Digite a terceira nota:"))
let numero4 = parseInt(prompt("Digite a quarta nota:"))

let media = (numero1 + numero2 + numero3 + numero4) / 4

if (media >= 5) {
    console.log("aprovado, média: ", media)
} else {
    console.log("reprovado, média: ", media)
}

