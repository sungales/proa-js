let counter = 49
let aux = 0
let soma = 0
let media = 0

while (counter < 71) {
    if (counter % 2 === 0) { 
        aux = counter
        soma = soma + aux
        console.log("a soma dos números é: ", soma)
    }
    counter++
    console.log("a média é: ", soma / 10)
}