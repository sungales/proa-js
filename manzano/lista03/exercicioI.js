let media = 0
let soma = 0
let counter = 1

while (counter < 11) {
    soma += Number(prompt(`Escreva o ${counter} valor: `))
    counter++
}

media = soma / 10

alert(media)